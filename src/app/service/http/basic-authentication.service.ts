import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  // @Injectable annotation makes this service
  providedIn: 'root',
})
export class BasicAuthenticationService {
  constructor(public httpClient: HttpClient) {}

  // authenticate(username: string, password: string) {
  //   // simply created a method for authentication for hardcoded values so that user can login according to it, the arguments/parameters can simply be used when we use it inside some other service
  //   //console.log('before', this.isUserLoggedIn());
  //   if (username === 'Rudraksh' && password === 'dummy') {
  //     sessionStorage.setItem('authenticatedUser', username);
  //     //console.log('after', this.isUserLoggedIn());
  //     return true;
  //   }
  //   return false;
  // }

  executeAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    }); // passing our Base64 string inside the headers by the field Authorization
    return this.httpClient
      .get<AuthenticationBean>(`http://localhost:8081/basicauth`, { headers })
      .pipe(
        // this pipe method basically helps us to declare what should be done in case of success or failure
        map((data) => {
          // for success case we are going to set the username in authenticatedUser variable in browser's local storage
          sessionStorage.setItem('authenticatedUser', username);
          sessionStorage.setItem('token', basicAuthHeaderString);
          return data; // make sure to return data so that it is available to anyone who is using this service
        })
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem('authenticatedUser');
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem('token');
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
    sessionStorage.removeItem('token');
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
