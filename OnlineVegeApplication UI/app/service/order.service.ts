import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderApi : string;

  constructor(private client : HttpClient) {

   
   this.orderApi = `${environment.apiPath}/order`;
  }

 addOrder(order:Order):Observable<Order>{
   return this.client.post<Order>(this.orderApi,order);
 }

 updateOrder(order:Order):Observable<Order>{
   return this.client.put<Order>(`${this.orderApi}/${order.orderNo}`,order);
 }

 
 viewOrderList(orderNo : number) : Observable<Order> {
  return this.client.get<Order>(`${this.orderApi}/${orderNo}`);

 }
 cancelOrder(orderNo : number): Observable<void> { 
  return this.client.delete<void>(`${this.orderApi}/${orderNo}`);

 }
 
 findAll() : Observable<Order[]> {
   return this.client.get<Order[]>(this.orderApi);
 }
}





