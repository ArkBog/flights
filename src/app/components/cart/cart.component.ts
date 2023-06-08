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
  
  constructor(private basketService: BasketService){}

  ngOnInit(): void {
    this.basket = this.basketService.basketFromService;
    console.log(this.basket)
  }
}
