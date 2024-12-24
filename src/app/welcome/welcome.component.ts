import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import {
  HelloWorldBean,
  WelcomeDataService,
} from '../service/data/welcome-data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  messageFirst = 'Welcome user: '; // without declaring the datatype typescript knows that this message is string
  messageSecond = ' to our Dashboard!';
  welcomeMessageFromService: string = '';
  name = '';
  constructor(
    private route: ActivatedRoute,
    public welcomeDataService: WelcomeDataService
  ) {}

  ngOnInit(): void {
    // this.message = 5; --> This will throw compilation error
    //console.log(this.messageFirst);
    this.name = this.route.snapshot.params['name']; // here whatever we are passing in the url for our route is going to be present in the name variable in params variable of snapshot parameter of our route and it will be printed on the console of our browser
  }

  getWelcomeMessage() {
    //console.log('Get Welcome Message');
    console.log(this.welcomeDataService.executeHelloWorldBeanService());
    this.welcomeDataService.executeHelloWorldBeanService().subscribe(
      (response) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    ); // subscribe() method helps to call the apis from our controller without any CORS issue as we have provided @CrossOrigins annotation on our controller and this is an asynchronous call
    console.log('ending getWelcomeMessage()');
  }

  handleSuccessfulResponse(response: HelloWorldBean) {
    // console.log(response);
    // console.log(response.message);
    this.welcomeMessageFromService = response.message;
  }

  handleErrorResponse(error: HttpErrorResponse) {
    //  console.log(error);
    this.welcomeMessageFromService = error.error.message;
  }
}
