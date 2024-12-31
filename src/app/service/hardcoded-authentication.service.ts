import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from './http/basic-authentication.service';
import { AUTHENTICATED_USER } from '../app.constants';

@Injectable({
  // @Injectable annotation makes this service
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor(private basicAuthenticationService: BasicAuthenticationService) {}

  authenticate(username: string, password: string) {
    // simply created a method for authentication for hardcoded values so that user can login according to it, the arguments/parameters can simply be used when we use it inside some other service
    //console.log('before', this.isUserLoggedIn());
    if (
      username === this.basicAuthenticationService.getAuthenticatedUser() &&
      password === 'dummy'
    ) {
      sessionStorage.setItem(AUTHENTICATED_USER, username);
      //console.log('after', this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }
}
