import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    return this.httpClient.get<HelloWorldBean>(
      `http://localhost:8080/helloWorld/pathVariable/${name}`
    );
  }
}
