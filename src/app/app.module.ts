import { routes } from './app.route';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckoutComponent } from './checkout/checkout.component';


@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    NavbarComponent,
    CheckoutComponent
   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
