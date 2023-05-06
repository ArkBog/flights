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
    FlightDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LayoutModule,
    ReactiveFormsModule
  ],
  providers: [IsActiveService, DatePipe, UserIsLoggedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
