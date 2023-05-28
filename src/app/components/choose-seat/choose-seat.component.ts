import { Component, OnInit } from '@angular/core';
import { SeatsService } from 'src/app/services/seats.service';

@Component({
  selector: 'app-choose-seat',
  templateUrl: './choose-seat.component.html',
  styleUrls: ['./choose-seat.component.scss']
})
export class ChooseSeatComponent implements OnInit {


  constructor (
    private seatsService: SeatsService,
  ){}

  buttons: number[] = [];

  ngOnInit(): void {
    console.log(this.seatsService.seats);
    
    for(let i = 0; i < this.seatsService.seats; i++){
      this.buttons.push(i)
    }
  }

}
