import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as data from '../../database/airports.json';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';


const airports = (<any>data);


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.scss']
})



export class FlightsSearchComponent implements OnInit {

  airports: any = airports.default;
  zmienna:any;

  departures:any;

  today:Date = new Date();
  latestDate:any;
  minReturnDate:any;

  constructor(public datepipe:DatePipe){}

  flights = new FormGroup({
    flyFrom: new FormControl("Origin"),
    flyTo: new FormControl("Destination"),
    departureDate: new FormControl(),
    returnDate: new FormControl(),
  })
  

  ngOnInit(): void {
    this.latestDate =this.datepipe.transform(this.today, 'yyyy-MM-dd');
    console.log(this.latestDate);
  }
  
  startTravel(value:any){
    this.zmienna = value;
    this.departures = airports.default[this.zmienna].departures;
  }

  changeDate(value:any){
    this.minReturnDate = value;
  }
  
}
