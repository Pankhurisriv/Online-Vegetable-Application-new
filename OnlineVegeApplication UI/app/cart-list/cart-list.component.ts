import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cart : Cart[];
  err : string;
    constructor(private cartService : CartService) { }
  
    ngOnInit(): void {
      this.cartService.findAll().subscribe(
        (data) => this.cart =data,
        (err) => {console.log (err); this.err="sorry. unable to retrieve data"}
      );
    }
  
    delete(cartId: number) {
      if (confirm("Are you sure?")) {
        this.cartService.removeCart(cartId).subscribe(
          () => { this.cart.splice(this.cart.findIndex(e => e.cartId == cartId), 1) }
        );
      }
    }
  

}

