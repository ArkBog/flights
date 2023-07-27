import { Component, OnInit, Renderer2 } from '@angular/core';
import * as data from '../../database/airports.json';

const airports = <any>data;

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss'],
})
export class FlightsComponent implements OnInit {
  airports: any = airports.default;
  filters: string[] = [];
  filteredElements: any = [];

  constructor(private render: Renderer2) {}

  ngOnInit(): void {
    if (this.filteredElements.length === 0) {
      this.filteredElements = this.airports;
    }
    for (let i = 0; i < this.airports.length; i++) {
      if (this.filters.length === 0) {
        console.log(this.airports[i].placeCountry);
        this.filters.push(this.airports[i].placeCountry);
      } else {
        if (this.filters.includes(this.airports[i].placeCountry)) {
          continue;
        } else {
          this.filters.push(this.airports[i].placeCountry);
        }
      }
    }
    console.log(this.filters);
  }

  chooseFilter(param: any, event: any) {
    this.removeActive();
    this.render.addClass(event.target,"active");
    if (this.filteredElements === this.airports) {
      this.filteredElements = [];
      for (let i = 0; i < this.airports.length; i++) {
        if (this.airports[i].placeCountry === param) {
          this.filteredElements.push(this.airports[i]);
        }
      }
    } else if (
      this.filteredElements != this.airports && this.filteredElements[0].placeCountry === param) {
      this.removeActive();
      this.filteredElements = this.airports;
    } else {
      this.filteredElements = [];
      for (let i = 0; i < this.airports.length; i++) {
        if (this.airports[i].placeCountry === param) {
          this.filteredElements.push(this.airports[i]);
        }
      }
    }
  }

  removeActive() {
    let buttons = document.querySelectorAll('.button-full');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
  }
}
