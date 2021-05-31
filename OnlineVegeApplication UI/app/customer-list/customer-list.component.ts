import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customer: Customer[];
  err:String;
  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    this.customerService.findAll().subscribe(
      (data) =>{this.customer=data; console.log(data)},
      (err)=>{console.log(err); 
      this.err="Sorry Cannot retrieve Data"}
    );
  }
  delete(customerId:number){
    if(confirm("Are You Sure")){
      this.customerService.removeCustomer(customerId).subscribe(
      ()=>{this.customer.splice(this.customer.findIndex(e=>customerId==customerId),1)}
      );
    }
  }

}
