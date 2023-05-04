import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IsActiveService } from 'src/app/services/is-active.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  activeStatus!: string;

  menu:string[] = ["Flights", "Sale", "About us", "Contact"]; 

  constructor(private activeService: IsActiveService, private readonly router: Router) {}
  
  ngOnInit(): void {
    this.activeService.isActive.subscribe(activeStatus => this.activeStatus = activeStatus)
  }

  displayMenu(){
    this.activeService.changeActive("none")
  }

  goToLink(value: any){
    let newValue:String = value.toLowerCase();
    let newValueWithoutSpace: string = newValue.replace(/\s/g, "")
    this.router.navigate([`/${newValueWithoutSpace}`]);
    this.displayMenu();
  }
}
