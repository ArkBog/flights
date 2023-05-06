import { Component } from '@angular/core';
import { UserIsLoggedService } from 'src/app/services/user-is-logged.service';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent {

  constructor(private userIsLoggedInfo: UserIsLoggedService){}
  userIsLoggedStatus!: boolean;

  ngOnInit(){
    this.userIsLoggedInfo.userIsLogged.subscribe(userIsLoggedStatus => this.userIsLoggedStatus = userIsLoggedStatus);
    console.log(this.userIsLoggedStatus)
  }

}
