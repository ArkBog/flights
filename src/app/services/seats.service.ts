import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeatsService {

  seats:any;


  private displayAirline = new BehaviorSubject("none");
  currentStatus = this.displayAirline.asObservable();

  constructor() { }

  changeStatus(status:string){
    this.displayAirline.next(status)
  }

}
