import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'Rudraksh';
  password = '';

  constructor() {}

  ngOnInit(): void {}

  // creating an action/event method on login button click
  handleLogin() {
    console.log(this.username);
  }
}
