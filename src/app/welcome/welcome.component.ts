import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  messageFirst = 'Welcome user: '; // without declaring the datatype typescript knows that this message is string
  messageSecond = ' to our Dashboard!';
  name = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // this.message = 5; --> This will throw compilation error
    console.log(this.messageFirst);
    this.name = this.route.snapshot.params['name']; // here whatever we are passing in the url for our route is going to be present in the name variable in params variable of snapshot parameter of our route and it will be printed on the console of our browser
  }
}
