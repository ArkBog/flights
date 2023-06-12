import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as data from '../../database/airports.json';
import { formatDate } from '@angular/common';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FlightFormService } from 'src/app/services/flight-form.service';

const airports = <any>data;

@Component({
  selector: 'app-flights-search',
  templateUrl: './flights-search.component.html',
  styleUrls: ['./flights-search.component.scss'],
})
export class FlightsSearchComponent implements OnInit {
  airports: any = airports.default;
  zmienna: any;

  departures: any;

  today: Date = new Date();
  latestDate: any;
  minReturnDate: any;

  formId: any;

  constructor(
    public datepipe: DatePipe,
    private readonly router: Router,
    private readonly flightFormService: FlightFormService
  ) {}

  flightsAllForm: any;
  flyFromToLocal: any;
  validationForSelect:any;

  flights = new FormGroup({
    flyFrom: new FormControl("Origin", Validators.required),
    flyTo: new FormControl('Destination', Validators.required),
    departureDate: new FormControl(null, Validators.required),
    returnDate: new FormControl(null),
    numberOfPassangers: new FormControl(null, Validators.required),
  });

  ngOnInit(): void {
    this.latestDate = this.datepipe.transform(this.today, 'yyyy-MM-dd');
    console.log(this.latestDate);
  }

  startTravel(value: any) {
    this.zmienna = value;
    this.departures = airports.default[this.zmienna].departures;
  }

  changeDate(value: any) {
    this.minReturnDate = value;
  }

  getControl(controlName: string): FormControl {
    return this.flights.get(controlName) as FormControl;
  }

  getErrorMessage(controlName: string): string {
    const control = this.flights.get(controlName);
    if (control && control.touched && control.errors) {
      if (control.errors['required' || control.value === 'Origin' || control.value === 'Destination'] ) {
        this.validationForSelect = false;
        return `This input ${controlName} is required.`;
        
      }

    }
    return '';
  }

  onSubmit() {
    this.flights.markAllAsTouched();
    if (this.flights.valid) {
      console.log(typeof this.flights.value);
      this.flyFromToLocal = JSON.stringify(this.flights.value);
      localStorage.setItem('flyFrom', this.flyFromToLocal);
      this.router.navigate(['flight-details']);
    } else {
      const requiredFields = [
        'flyFrom',
        'flyTo',
        'departureDate',
        'numberOfPassengers',
      ];
      const errorMessages = requiredFields.map((field) =>
        this.getErrorMessage(field)
      );
      console.log('Validation Errors:', errorMessages);
    }
    console.log(this.validationForSelect)
  }

  
}
