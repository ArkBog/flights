import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserIsLoggedService {

  private userIsLoggedSource = new BehaviorSubject(false);
  userIsLogged = this.userIsLoggedSource.asObservable();

  constructor() { }

  changeLogginStatus(userIsLoggedStatus: boolean){
    this.userIsLoggedSource.next(userIsLoggedStatus)
  }
}
