import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WelcomeDataService {
  constructor(private httpClient: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.httpClient.get('http://localhost:8080/helloWorldBean');
    //console.log('Execute Hello World Bean Service');
  }
}
