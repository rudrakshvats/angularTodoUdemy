import { Injectable } from '@angular/core';

@Injectable({
  // @Injectable annotation makes this service
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  authenticate(username: string, password: string) {
    // simply created a method for authentication for hardcoded values so that user can login according to it, the arguments/parameters can simply be used when we use it inside some other service
    if (username === 'Rudraksh' && password === 'dummy') {
      return true;
    }
    return false;
  }
}
