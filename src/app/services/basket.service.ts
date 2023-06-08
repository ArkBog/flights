import { Injectable } from '@angular/core';
import { Ticket } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basketFromService:Ticket[]=[];

  constructor() { }
}
