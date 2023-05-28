import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { IsActiveService } from 'src/app/services/is-active.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public showContainer!: boolean;

  activeStatus!: string;


  menu:string[] = ["Flights", "Sale", "About us", "Contact"];
  logo:string = "./assets/img/logo.svg" ;
  cart:string = "../../../assets/img/cart-shopping-solid.svg" ;
  account:string = "../../../assets/img/user-solid.svg" ;
  menuHamburger:string = "../../../assets/img/bars-solid.svg" ;

  constructor(private activeService: IsActiveService, public breakpointObserver: BreakpointObserver, private readonly router:Router){}


  ngOnInit(): void {
    this.activeService.isActive.subscribe(activeStatus => this.activeStatus = activeStatus);

    
    this.breakpointObserver.observe(['(min-width: 889px)']).subscribe((state:BreakpointState)=>{
      if (state.matches){
        this.showContainer = true;
      } else{
        this.showContainer = false
      }
    })
  }

  displayMenu(){
    this.activeService.changeActive("block")
  }

  goToLink(value: any){
    let newValue:String = value.toLowerCase();
    let newValueWithoutSpace: string = newValue.replace(/\s/g, "")
    console.log(newValueWithoutSpace)
    this.router.navigate([`/${newValueWithoutSpace}`]);
  }

}
