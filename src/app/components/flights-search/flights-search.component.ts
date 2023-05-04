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


  allAirports: any = airports.default;
  departures:string = "Origin";
  destination:string = "Destination"
  today:Date = new Date();
  latestDate:any;

  constructor(public datepipe:DatePipe){}
  

  ngOnInit(): void {
    this.latestDate =this.datepipe.transform(this.today, 'yyyy-MM-dd');
  }
  

  

  chooseStart(value:any){
    console.log(value);
    this.departures = this.allAirports[value].odloty;
    console.log(this.departures)
  }

  chooseDestination(value:any){
    console.log(value);
    this.destination = value;
  }
  
  flightsSearcher = new FormGroup({
    departures: new FormControl(this.departures),
    destination: new FormControl(this.destination),
    startDate: new FormControl(),
    comebackDate: new FormControl(),
  })

  
}
