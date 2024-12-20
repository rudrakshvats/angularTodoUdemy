import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private router: Router // here we are basically injecting the router component variable by the concept of dependency injection as we do in Java, note that dependency injection in one component for other component is done inside the constructor
  ) {}

  ngOnInit(): void {}

  // creating an action/event method on login button click
  handleLogin() {
    console.log(this.username);
    if (this.username === 'Rudraksh' && this.password === 'dummy') {
      // if user details are validated, then we will redirect the user to Login Page using routes
      this.router.navigate(['welcome', this.username]); // we are telling the browser to navigate to welcome page whenever user validates, here welcome and this.username are the parameters which are going to be passed in our navigate method which will create url i.e. our route on which we want to navigate explicitly
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
