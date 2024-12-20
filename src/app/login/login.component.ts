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
      this.router.navigate(['welcome']); // we are telling the browser to navigate to welcome page whenever user validates
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
