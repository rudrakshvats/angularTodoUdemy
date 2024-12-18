import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  // creating an action/event method on login button click
  handleLogin() {
    console.log(this.username);
    if (this.username === 'Rudraksh' && this.password === 'dummy') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
