import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  message = 'Some Welcome Message'; // without declaring the datatype typescript knows that this message is string
  constructor() {}

  ngOnInit(): void {
    // this.message = 5; --> This will throw compilation error
    console.log(this.message);
  }
}
