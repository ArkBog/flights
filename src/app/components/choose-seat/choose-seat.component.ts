import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SeatsService } from 'src/app/services/seats.service';

interface Seat {
  seatsNumber?: string;
}

@Component({
  selector: 'app-choose-seat',
  templateUrl: './choose-seat.component.html',
  styleUrls: ['./choose-seat.component.scss'],
})
export class ChooseSeatComponent implements OnInit {
  constructor(private seatsService: SeatsService) {}

  status!: string;

  seatsCols: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];

  allSeats: Seat[] = [];

  seat: Seat = {};

  yourSeat!: string;

  choosenSeatsArray: string[] = []; 
  choosenSeatsArrayToJson:any;
  

  ngOnInit(): void {
    console.log(this.seatsService.seats);

    for (let i = 0; i < this.seatsCols.length; i++){
      for(let j = 0; j < this.seatsService.seats / this.seatsCols.length; j++){
        this.seat = { seatsNumber: `${j +1}${this.seatsCols[i]}`};
        this.allSeats.push(this.seat);
      // this.buttons.push(i);
      }
    }

    this.seatsService.currentStatus.subscribe(status => this.status = status);
  }

  choosenSeat(param:any){
    this.yourSeat = param;

    
  }

  @Output() messageEvent = new EventEmitter<string>();

  closeComponent(): void{
    this.choosenSeatsArray.push(this.yourSeat);
    this.choosenSeatsArrayToJson = JSON.stringify(this.choosenSeatsArray);
    // localStorage.setItem("seats", this.choosenSeatsArrayToJson);
    alert(this.yourSeat);
    this.messageEvent.emit(this.yourSeat);
    this.seatsService.changeStatus("none");

  }
}
