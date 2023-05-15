import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightFormService {

  formId:any;

  constructor(private http:HttpClient){}

  // addForm(body:any){

	// 	return this.http.post('http://localhost:3000/form',body)
	// }
  // getUsers(){

  //   return this.http.get(`http://localhost:3000/form`)
  // }
}
