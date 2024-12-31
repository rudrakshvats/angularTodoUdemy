import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  // @Injectable annotation makes this service
  providedIn: 'root',
})
export class BasicAuthenticationService {
  constructor(public httpClient: HttpClient) {}

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

  executeAuthenticationService(username: string, password: string) {
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    }); // passing our Base64 string inside the headers by the field Authorization
    return this.httpClient.get<AuthenticationBean>(
      `http://localhost:8081/basicAuth`,
      { headers }
    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}

export class AuthenticationBean {
  constructor(public message: string) {}
}
