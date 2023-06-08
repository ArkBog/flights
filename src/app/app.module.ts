import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { IsActiveService } from './services/is-active.service';
import { FlightsComponent } from './components/flights/flights.component';
import { SaleComponent } from './components/sale/sale.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { FlightsSearchComponent } from './components/flights-search/flights-search.component';
import { DatePipe } from '@angular/common';
import { FlightDetailsComponent } from './components/flight-details/flight-details.component';
import { UserIsLoggedService } from './services/user-is-logged.service';
import { FlightFormService } from './services/flight-form.service';
import { HttpClientModule } from '@angular/common/http';
import { ChooseSeatComponent } from './components/choose-seat/choose-seat.component'
import { SeatsService } from './services/seats.service';
import { BasketService } from './services/basket.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CartComponent,
    ProfileComponent,
    MenuComponent,
    FlightsComponent,
    SaleComponent,
    AboutUsComponent,
    ContactComponent,
    FlightsSearchComponent,
    FlightDetailsComponent,
    ChooseSeatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [IsActiveService, DatePipe, UserIsLoggedService, FlightFormService, SeatsService, BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
