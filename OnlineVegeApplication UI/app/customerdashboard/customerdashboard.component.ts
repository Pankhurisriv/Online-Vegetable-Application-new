import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {
customer:Customer;
infoMsg:string;

  constructor(
    private customerService:CustomerService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.customer=this.customerService.currentCustomer;

    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        if(params.msg){
          this.infoMsg=params.msg;
          this.customer=this.customerService.currentCustomer;
        }
      }
    );
  
  }

}
