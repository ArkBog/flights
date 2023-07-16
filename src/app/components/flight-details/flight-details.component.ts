import { Component, OnInit } from '@angular/core';
import { FlightFormService } from 'src/app/services/flight-form.service';
import { UserIsLoggedService } from 'src/app/services/user-is-logged.service';
import * as data from '../../database/airports.json';
import { SeatsService } from 'src/app/services/seats.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ticket } from 'src/app/interfaces/interfaces';
import { BasketService } from 'src/app/services/basket.service';
import { DatePipe } from '@angular/common';

const airports = <any>data;

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss'],
})
export class FlightDetailsComponent implements OnInit {
  constructor(
    public datepipe: DatePipe,
    private userIsLoggedInfo: UserIsLoggedService,
    private seatsService: SeatsService,
    private basketService: BasketService
  ) {}

  airports: any = airports.default;

  today: Date = new Date();
  maxDate: any;

  numberOfPassangersFromLocal: any;
  numberOfPassangersArray: any = [];

  userIsLoggedStatus!: boolean;
  flightsForm: any;
  storageForm: any;

  startFly: any;
  convertFlyFromToNumber: any;
  startFlyHeader!: string;

  endFly: any;
  convertFlyToToNumber: any;
  endFlyHeader!: string;

  departureDate!: string;
  returnDate!: string;

  seats!: number;

  status!: string;

  yourSeat!: string;

  yourSeats: string[] = [];

  price!: number;

  twoWayTravel!: boolean;

  bookedTicket: any;
  basket: Ticket[] = [];

  extraLuggage: boolean = false;

  ticket = new FormGroup({
    name: new FormControl(),
    surname: new FormControl(),
    dateOfBirth: new FormControl(),
    additionalLuggage: new FormControl(),
    seat: new FormControl(),
  });

  ngOnInit(): void {
    this.maxDate = this.datepipe.transform(this.today, 'yyyy-MM-dd');

    this.userIsLoggedInfo.userIsLogged.subscribe(
      (userIsLoggedStatus) => (this.userIsLoggedStatus = userIsLoggedStatus)
    );

    this.storageForm = localStorage.getItem('flyFrom');

    this.flightsForm = JSON.parse(this.storageForm);
    this.convertFlyFromToNumber = Number(this.flightsForm.flyFrom);

    this.startFly = this.airports[this.convertFlyFromToNumber];
    console.log(this.startFly);
    this.startFlyHeader = this.startFly.from;

    this.convertFlyToToNumber = Number(this.flightsForm.flyTo);
    console.log(this.convertFlyFromToNumber);
    this.endFly = this.startFly.departures[this.convertFlyToToNumber];
    this.endFlyHeader = this.endFly.name;

    this.departureDate = `${this.flightsForm.departureDate} ${this.endFly.startTime}`;
    this.returnDate = `${this.flightsForm.returnDate} ${
      this.airports[this.convertFlyFromToNumber].departures[
        this.convertFlyToToNumber
      ].startTime
    }`;
    this.seats = this.startFly.departures[this.convertFlyToToNumber].seats;
    this.seatsService.seats = this.seats;

    this.price =
      this.airports[this.convertFlyFromToNumber].departures[
        this.convertFlyToToNumber
      ].price;

    this.numberOfPassangersFromLocal = this.flightsForm.numberOfPassangers;

    for (let i = 0; i < this.numberOfPassangersFromLocal; i++) {
      this.numberOfPassangersArray.push(i);
    }

    this.seatsService.currentStatus.subscribe(
      (status) => (this.status = status)
    );
  }

  reciveData($event: any) {
    this.yourSeat = $event;
    this.yourSeats.push(this.yourSeat);
  }

  displayComponentChooseSeat() {
    this.seatsService.changeStatus('block');
  }

  onSubmitTicket(param: any) {
    if (this.flightsForm.returnDate === null) {
      this.twoWayTravel = false;
    } else this.twoWayTravel = true;
    this.bookedTicket = {
      name: this.ticket.value.name,
      surname: this.ticket.value.surname,
      dateOfBirth: this.ticket.value.dateOfBirth,
      additionalLuggage: this.ticket.value.additionalLuggage,
      seat: this.yourSeat,
      price: this.price,
      twoWayTravel: this.twoWayTravel,
    };
    this.basket.push(this.bookedTicket);
    this.basketService.basketFromService = this.basket;
    this.yourSeats.splice(param, 1);
    this.numberOfPassangersArray.splice(param, 1);
    console.log(this.numberOfPassangersArray.length);
  }
  extraLuggageStatus(param: any) {
    this.extraLuggage = param;
  }
}
