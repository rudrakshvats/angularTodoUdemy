import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/http/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'Rudraksh';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(
    private router: Router, // here we are basically injecting the router component variable by the concept of dependency injection as we do in Java, note that dependency injection in one component for other component is done inside the constructor
    private hardCodedAuthenticationService: HardcodedAuthenticationService, // since HardcideAuthenticationService is injectable then we can inject it inside our login component service like this
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {}

  // creating an action/event method on login button click
  handleLogin() {
    console.log(this.username);
    // if (this.username === 'Rudraksh' && this.password === 'dummy') {
    if (
      this.hardCodedAuthenticationService.authenticate(
        this.username,
        this.password
      )
    ) {
      // added this check because we have injected authentication code inside our login component service and now we can simply use its method by passing the parameters specified
      // if user details are validated, then we will redirect the user to Login Page using routes
      this.router.navigate(['welcome', this.username]); // we are telling the browser to navigate to welcome page whenever user validates, here welcome and this.username are the parameters which are going to be passed in our navigate method which will create url i.e. our route on which we want to navigate explicitly
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  // creating an action/event method on login button click using basic authentication service
  handleBasicAuthLogin() {
    console.log(this.username);
    // if (this.username === 'Rudraksh' && this.password === 'dummy') {
    this.basicAuthenticationService
      .executeAuthenticationService(this.username, this.password)
      .subscribe(
        (data) => {
          // handle the success case
          console.log(data);
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        (error) => {
          // handle the failure case
          console.log(error);
          this.invalidLogin = true;
        }
      );
  }
}
