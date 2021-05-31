import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // private _currentBill: BillingDetails;
private cartApi : string;

constructor(private client : HttpClient) {
  this.cartApi = `${environment.apiPath}/cart`;
 }

addCart(cart:Cart):Observable<Cart>{
  return this.client.post<Cart>(this.cartApi, cart);
}

updateCart(cart:Cart):Observable<Cart>{
  return this.client.put<Cart>(`${this.cartApi}/${cart.cartId}`,cart);
}


viewCart(cartId : number) : Observable< Cart> {
  return this.client.get<Cart>(`${this.cartApi}/${cartId}`);
}
findAll() : Observable<Cart[]> {
  return this.client.get<Cart[]>(this.cartApi);
}

removeCart(cartId : number):Observable<void>{
  return this.client.delete<void>(`${this.cartApi}/${cartId}`);
}

 viewcartByCustomerId(customerId : number) :Observable< Cart>{
  return this.client.get<Cart>(`${this.cartApi}/{cart},${customerId}`);

 }
}


