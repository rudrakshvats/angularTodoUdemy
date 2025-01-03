import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  //isUserLoggedIn: boolean = false;

  constructor(
    public hardCodedAuthenticationService: HardcodedAuthenticationService
  ) {}

  ngOnInit(): void {
    //this.isUserLoggedIn = this.hardCodedAuthenticationService.isUserLoggedIn();
  }
}
