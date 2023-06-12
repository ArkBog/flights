import { Component, OnInit } from '@angular/core';
import users from "../../database/users.json";
import { AuthService } from 'src/app/services/auth.service';
// import * as data from "../../database/users.json";
import { FormControl, FormGroup } from '@angular/forms';

const data = users;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  login:string = "admin";
  password:string = "admin123";
  constructor(private authService:AuthService) {}

  usersFounded:any;
  userLogged = false;
  userLogin:string = "";
  userId:string = "";


  logIn = new FormGroup({
    login: new FormControl,
    password: new FormControl,
  })

  ngOnInit() {
  }

  submit(){
    for(let i = 0; i < data.users.length; i++){
      if(data.users[i].login === this.logIn.value.login && data.users[i].password === this.logIn.value.password){
        this.usersFounded = data.users[i];
        console.log(this.usersFounded);
        this.authService.userIsLogged = true;
        this.userLogged = true;
        this.userLogin = this.usersFounded.login;
      }
    }
  }
}
