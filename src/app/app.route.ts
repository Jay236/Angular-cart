import { CartComponent } from './cart/cart.component';
import { AppComponent } from './app.component';
import { Routes } from "@angular/router";

export const routes: Routes= [
{
    path: '',
    component: AppComponent
},
{
    path:'cart',
    component:CartComponent
}
]