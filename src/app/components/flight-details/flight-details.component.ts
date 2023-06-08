import { Component, OnInit } from '@angular/core';
import { FlightFormService } from 'src/app/services/flight-form.service';
import { UserIsLoggedService } from 'src/app/services/user-is-logged.service';
import * as data from '../../database/airports.json';
import { SeatsService } from 'src/app/services/seats.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ticket } from 'src/app/interfaces/interfaces';
import { BasketService } from 'src/app/services/basket.service';

const airports = (<any>data);

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss'],
})
export class FlightDetailsComponent implements OnInit {
  constructor(
    private userIsLoggedInfo: UserIsLoggedService,
    private seatsService: SeatsService,
    private basketService: BasketService,
  ) {}

  airports: any = airports.default;

  numberOfPassangersFromLocal:any;
  numberOfPassangersArray:any = [];

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

  status!: string;

  yourSeat!:string

  bookedTicket:any;
  basket:Ticket[] = [];

  ticket = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    dateOfBirth: new FormControl(),
    additionalLuggage: new FormControl(this.yourSeat),
    seat: new FormControl(),
  })



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
    this.returnDate = `${this.flightsForm.returnDate} ${this.airports[this.convertFlyToToNumber].departures[this.convertFlyFromToNumber].startTime}`;
    console.log(this.returnDate);
    this.seats = this.startFly.departures[this.convertFlyToToNumber].seats;
    this.seatsService.seats = this.seats;

    this.numberOfPassangersFromLocal = this.flightsForm.numberOfPassangers;
    console.log(this.numberOfPassangersFromLocal);

    for(let i = 0; i < this.numberOfPassangersFromLocal; i++){
      this.numberOfPassangersArray.push(i)
    }

    this.seatsService.currentStatus.subscribe(status => this.status = status);


  
  }



  reciveData($event: any){
    this.yourSeat = $event;
    console.log(this.yourSeat);
  }

  displayComponentChooseSeat(){
    this.seatsService.changeStatus("block")
  }
  
  onSubmitTicket(){
    console.log(this.ticket.value);
    this.bookedTicket = {
      name: this.ticket.value.name,
      surname: this.ticket.value.surname,
      dateOfBirth: this.ticket.value.dateOfBirth,
      additionalLuggage: this.ticket.value.additionalLuggage,
      seat: this.yourSeat,
    };
    this.basket.push(this.bookedTicket);
    console.log(this.basket);
    this.basketService.basketFromService = this.basket;
    this.numberOfPassangersArray.shift();
  }
}
