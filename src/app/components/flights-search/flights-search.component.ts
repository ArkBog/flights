import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as data from '../../database/airports.json';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FlightFormService } from 'src/app/services/flight-form.service';


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

  formId: any;

  

  constructor(public datepipe:DatePipe, private readonly router: Router, private readonly flightFormService:FlightFormService){}

  flightsAllForm:any;
  flyFromToLocal:any;
  

  flights = new FormGroup({
    flyFrom: new FormControl<string>("Origin"),
    flyTo: new FormControl("Destination"),
    departureDate: new FormControl(),
    returnDate: new FormControl(),
    numberOfPassangers: new FormControl(),
  })
  

  ngOnInit(): void {
    this.latestDate =this.datepipe.transform(this.today, 'yyyy-MM-dd');
    console.log(this.latestDate);
    // this.flightFormService.getUsers().subscribe( (data:any) => {
    //   this.formId = data.length;
    // })

  }
  
 

  startTravel(value:any){
    this.zmienna = value;
    this.departures = airports.default[this.zmienna].departures;
  }

  changeDate(value:any){
    this.minReturnDate = value;
  }

  onSubmit(){
    // this.flightFormService.addForm(this.flights.value).subscribe({
    //   next: (data) => console.log(data),
    //   error: (err) => {console.log(err)}
    // });
    console.log(typeof this.flights.value)
    this.flyFromToLocal = JSON.stringify(this.flights.value)
    localStorage.setItem("flyFrom", this.flyFromToLocal);
  }

  }

