import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerService } from '../service/customer.service';
;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customerId : number;
  infoMsg: string;
  errMsg: string;
  imageUrl : string;

  constructor( private router:Router,
    private routerData:ActivatedRoute,
    private customerService:CustomerService,
    

    )
    
    { 
      this.imageUrl= "./assets/veg.jpg" ;
    }

  ngOnInit() {
    this.routerData.queryParams
    .subscribe(
      (params) =>{
        if(params.msg){
          this.infoMsg=params.msg;
        }
      }
    );
  }


  onSubmit(){
    this.customerService.viewCustomer(this.customerId)
    .subscribe(
      (data) => {
        this.customerService.currentCustomer=data;
        this.router.navigateByUrl("/dashboard");        
      },
      (err)=>{
        this.errMsg=err.error;
      }
    );
  }

  

}
