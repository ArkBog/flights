import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket.service';
import { Ticket } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  basket:Ticket[] = [];

  totalCost:any[] = [];
  sum:any;
  
  constructor(private basketService: BasketService){}

  ngOnInit(): void {
    this.totalCost.length = 0;
    console.log(this.totalCost);
    this.basket = this.basketService.basketFromService;

    
    for (let i = 0; i < this.basket.length; i++){
      if(this.basket[i].additionalLuggage === true){
        this.basket[i].price = this.basket[i].price + 50
      };
      if(this.basket[i].twoWayTravel === true){
        this.basket[i].price = this.basket[i].price * 2
      }
      this.totalCost.push(this.basket[i].price)
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
