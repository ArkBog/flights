import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as data from '../../database/airports.json';


const airports = (<any>data);


@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.scss']
})
export class FlightsSearchComponent implements OnInit {


  allAirports: any = airports.default;
  departures:any;

  ngOnInit(): void {
    console.log(this.allAirports[1].odloty);
  }
  

  flightsSearcher = new FormGroup({
    departures: new FormControl("Are you fly from?"),
  })

  chooseStart(value:any){
    console.log(value);
    this.departures = this.allAirports[value].odloty;
    console.log(this.departures)
  }
  

  
}
