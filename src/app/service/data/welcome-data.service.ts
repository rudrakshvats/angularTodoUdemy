import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private httpClient: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.httpClient.get<HelloWorldBean>(
      'http://localhost:8080/helloWorldBean'
    );
    //console.log('Execute Hello World Bean Service');
  }

  executeHelloWorldBeanWithPathVariable(name: string) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString,
    }); // passing our Base64 string inside the headers by the field Authorization
    return this.httpClient.get<HelloWorldBean>(
      `http://localhost:8081/helloWorld/pathVariable/${name}`,
      { headers }
    );
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'Rudraksh';
    let password = 'dummy';
    let basicAuthHeaderString =
      'Basic ' + window.btoa(username + ':' + password); // this window.btoa is simply function to create a Base64 string by the use of parameters mentioned as arguments
    return basicAuthHeaderString;
  }
}
