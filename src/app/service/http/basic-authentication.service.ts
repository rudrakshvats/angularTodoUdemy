import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { API_URL, AUTHENTICATED_USER, TOKEN } from 'src/app/app.constants';

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
      .get<AuthenticationBean>(`${API_URL}/basicauth`, { headers })
      .pipe(
        // this pipe method basically helps us to declare what should be done in case of success or failure
        map((data) => {
          // for success case we are going to set the username in authenticatedUser variable in browser's local storage
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderString);
          return data; // make sure to return data so that it is available to anyone who is using this service
        })
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
    return null;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
