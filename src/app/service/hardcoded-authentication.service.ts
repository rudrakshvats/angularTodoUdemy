import { Injectable } from '@angular/core';

@Injectable({
  // @Injectable annotation makes this service
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username: string, password: string) {
    // simply created a method for authentication for hardcoded values so that user can login according to it, the arguments/parameters can simply be used when we use it inside some other service
    //console.log('before', this.isUserLoggedIn());
    if (username === 'Rudraksh' && password === 'dummy') {
      sessionStorage.setItem('authenticatedUser', username);
      //console.log('after', this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}
