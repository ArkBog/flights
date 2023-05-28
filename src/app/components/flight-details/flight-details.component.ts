import { Component, OnInit } from '@angular/core';
import { FlightFormService } from 'src/app/services/flight-form.service';
import { UserIsLoggedService } from 'src/app/services/user-is-logged.service';
import * as data from '../../database/airports.json';
import { SeatsService } from 'src/app/services/seats.service';

const airports = (<any>data);

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss'],
})
export class FlightDetailsComponent implements OnInit {
  constructor(
    private userIsLoggedInfo: UserIsLoggedService,
    private readonly flightFormService: FlightFormService,
    private seatsService: SeatsService,
  ) {}

  airports: any = airports.default;

  userIsLoggedStatus!: boolean;
  flightsForm:any;
  storageForm:any;

  startFly:any;
  convertFlyFromToNumber:any;
  startFlyHeader!: string;

  endFly:any;
  convertFlyToToNumber:any;
  endFlyHeader!: string;

  departureDate!: string;
  returnDate!: string;
  
  seats!: number;



  ngOnInit(): void {
      this.userIsLoggedInfo.userIsLogged.subscribe(userIsLoggedStatus => this.userIsLoggedStatus = userIsLoggedStatus);
      console.log(this.userIsLoggedStatus);
    //   this.flightFormService.getUsers().subscribe( (data:any) => {
    //     console.log(data);
    //   });
    // }
    this.storageForm = localStorage.getItem("flyFrom");
    console.log(this.storageForm);
    this.flightsForm = JSON.parse(this.storageForm);
    console.log(this.flightsForm);
    console.log(this.flightsForm.flyFrom);
    this.convertFlyFromToNumber = Number(this.flightsForm.flyFrom);
    
    this.startFly = this.airports[this.convertFlyFromToNumber];
    console.log(this.startFly)
    this.startFlyHeader = this.startFly.from;

    this.convertFlyToToNumber = Number(this.flightsForm.flyTo);
    this.endFly = this.startFly.departures[this.convertFlyToToNumber];
    this.endFlyHeader = this.endFly.name;

    this.departureDate = `${this.flightsForm.departureDate} ${this.endFly.startTime}`;
    this.returnDate = `${this.flightsForm.returnDate} ${this.airports[this.convertFlyToToNumber+1].departures[this.convertFlyFromToNumber].startTime}`;
    console.log(this.returnDate);
    this.seats = this.startFly.departures[this.convertFlyToToNumber].seats;
    this.seatsService.seats = this.seats;


  
  }
  
}
