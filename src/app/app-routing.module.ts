import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CartComponent } from './components/cart/cart.component';
import { FlightsComponent } from './components/flights/flights.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SaleComponent } from './components/sale/sale.component';


const routes: Routes = [{path:"", component: HomeComponent}, {path:"profile", component: ProfileComponent}, {path: "cart", component: CartComponent}, {path: "flights", component: FlightsComponent}, {path: "contact", component: ContactComponent}, {path: "aboutus", component: AboutUsComponent}, {path:"sale", component: SaleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
