import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../service/order.service';

@Component({
  selector: 'app-custorder-form',
  templateUrl: './custorder-form.component.html',
  styleUrls: ['./custorder-form.component.css']
})
export class CustorderFormComponent implements OnInit {

  orderNofc:FormControl;
	customerIdfc:FormControl;
	totalAmountfc:FormControl;
	orderDatefc:FormControl;
	statusfc:FormControl;
  vegIdfc:FormControl;
  orderForm : FormGroup;


  status : string[];

    isEditing : boolean;


constructor(private orderService : OrderService, private router : Router,
private activatedRoute : ActivatedRoute) { 
this.orderNofc = new FormControl (null,[Validators.required,Validators.min(1)]);
this.customerIdfc=new FormControl(null, Validators.required);
this.totalAmountfc=new FormControl(null, Validators.required);
this.orderDatefc=new FormControl(null,Validators.required);
this.statusfc=new FormControl('PENDING');
this.vegIdfc=new FormControl(null,Validators.required);


this.orderForm=new FormGroup({​​​​​​​​
  orderNo:this. orderNofc,
  customerId:this.customerIdfc,
  totalAmount:this.totalAmountfc,
  orderDate:this.orderDatefc,
  status:this.statusfc,
  vegId:this.vegIdfc
  
  }​​​​​​​​);
   
  this.status= ["PENDING"]
  this.isEditing=false;
  
  
     }
  
   

     ngOnInit(): void {
      let orderNo = this.activatedRoute.snapshot.params.orderNo;
      if(orderNo){
        this.isEditing=true;
        this.orderService.viewOrderList(orderNo).subscribe(
        (data) => this.orderForm.setValue(data)
        );
      }
    }
    handleSubmit(){
      let obr= null;
      if(confirm("Order Successfully Placed")){
      if(this.isEditing){
        obr=this.orderService.updateOrder(this.orderForm.value);
      } else {
        obr=this.orderService.addOrder(this.orderForm.value);
      }
      obr.subscribe(
        (data) => this.router.navigateByUrl("/")
      );
    }
  }
  


}
