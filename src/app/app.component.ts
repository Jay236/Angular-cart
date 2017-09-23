import { Component } from '@angular/core';
import { CartComponent } from './cart/cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Hall';

    public cart = [];  
    public movieList =["Sucide-Squad","NYSM", "Hang-Over" ,"Fate-of-Furious", "Wolf-of-Wall-Street", "Real-Steel"];
    selectedMovie(movie) {
      this.cart.push(movie);
      alert(movie + 'was added to cart');
      localStorage.cartItems= JSON.stringify(this.cart);


    }
  }