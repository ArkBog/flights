import { Component, OnInit } from '@angular/core';
import { FlightFormService } from 'src/app/services/flight-form.service';
import { UserIsLoggedService } from 'src/app/services/user-is-logged.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss'],
})
export class FlightDetailsComponent implements OnInit {
  constructor(
    private userIsLoggedInfo: UserIsLoggedService,
    private readonly flightFormService: FlightFormService
  ) {}
  userIsLoggedStatus!: boolean;
  flightsForm:any;
  storageForm:any;

  ngOnInit() {
    //   this.userIsLoggedInfo.userIsLogged.subscribe(userIsLoggedStatus => this.userIsLoggedStatus = userIsLoggedStatus);
    //   console.log(this.userIsLoggedStatus);
    //   this.flightFormService.getUsers().subscribe( (data:any) => {
    //     console.log(data);
    //   });
    // }
    this.storageForm = localStorage.getItem("flyFrom");
    console.log(this.storageForm);
    this.flightsForm = JSON.parse(this.storageForm);
    console.log(this.flightsForm);
    console.log(typeof this.flightsForm);
  
  }
}
