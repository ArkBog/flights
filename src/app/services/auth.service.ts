import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  userIsLogged = false

  isUserLoggedIn(){
    return this.userIsLogged
  }
}
