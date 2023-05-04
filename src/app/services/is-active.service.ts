import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsActiveService {
  private isActiveSource = new BehaviorSubject("");
  isActive = this.isActiveSource.asObservable()

  constructor() { }

  changeActive(activeStatus: string){
    this.isActiveSource.next(activeStatus)
  }
}
