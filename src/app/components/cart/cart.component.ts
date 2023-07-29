import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { Ticket } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  basket: Ticket[] = [];

  totalCost: any[] = [];
  sum: any;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.totalCost = [];
    this.basket = [];
    console.log(this.totalCost);
    this.basket = this.basketService.basketFromService;
    console.log(this.basket);

    let ticketCost: number;

    if(this.basket.length >= 5){
      this.basket[4].price = this.basket[4].price * .5;
    }

    for (let i = 0; i < this.basket.length; i++) {
      // let birthdate = new Date(this.basket[i].dateOfBirth)
      let timeDiff = Math.abs(
        Date.now() - new Date(this.basket[i].dateOfBirth).getTime()
      );
      let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      console.log(age);
      ticketCost = this.basket[i].price;
      if (age < 8) {
        ticketCost = ticketCost * 0.5;
      }
      if (this.basket[i].twoWayTravel === true) {
        ticketCost = ticketCost * 2;
      }
      if (this.basket[i].additionalLuggage === true) {
        ticketCost = ticketCost + 50;
      }

      this.totalCost.push(ticketCost);
    }

    console.log(this.totalCost);
  }

  addArrayElements(): any {
    let sum = 0;
    for (let i = 0; i < this.totalCost.length; i++) {
      sum += this.totalCost[i];
    }
    return sum;
  }
}
