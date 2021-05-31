import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../model/order';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  order : Order[];
  err : string;
  
  constructor(private orderService : OrderService) { }
 
  ngOnInit(): void {
    this.orderService.findAll().subscribe(
      (data) => this.order =data,
      (err) => {console.log (err); this.err="sorry. unable to retrieve data"}
    );
  }
  delete(orderNo: number) {
    if (confirm("Are you sure?")) {
      this.orderService.cancelOrder(orderNo).subscribe(
        () => { this.order.splice(this.order.findIndex(e => e.orderNo == orderNo), 1) }
      );
    }

}
}



