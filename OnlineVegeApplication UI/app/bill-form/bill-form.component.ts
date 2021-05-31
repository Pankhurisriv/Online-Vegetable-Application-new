import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from '../service/bill.service';

@Component({
  selector: 'app-bill-form',
  templateUrl: './bill-form.component.html',
  styleUrls: ['./bill-form.component.css']
})
export class BillFormComponent implements OnInit {
  billingIdfc : FormControl;
  transactionModefc : FormControl;
  transactionDatefc : FormControl;
  transactionStatusfc : FormControl;
  orderfc : FormControl;

  billForm : FormGroup;

  isEditing:boolean;
  constructor(private billService : BillService, private router : Router, 
    private activatedRoute : ActivatedRoute) { 

      let today = new Date().toISOString().substring(0, 10);

      this.billingIdfc= new FormControl(null);
      this.transactionModefc=new FormControl(null, Validators.required);
      this.transactionDatefc= new FormControl(today,Validators.required);
      this.transactionStatusfc =new FormControl(null, Validators.required);
      this.orderfc = new FormControl (null,[Validators.required,Validators.min(1)]);
      
     

      this.billForm=new FormGroup({​​​​​​​​
        billingId : this.billingIdfc,
       transactionMode :this.transactionModefc,
       transactionDate :this.transactionDatefc,
       transactionStatus :this.transactionStatusfc,
        orderNo :this.orderfc
            }​​​​​​​​);

        this.isEditing=false;
    }

  ngOnInit(): void {
    let billingId = this.activatedRoute.snapshot.params.billingId;
    if(billingId){
      this.isEditing=true;
      this.billService.viewBill(billingId).subscribe(
      (data) => this.billForm.setValue(data));
    }
  }
  handleSubmit(){
    let obr= null;
    if(this.isEditing){
      obr=this.billService.updateBill(this.billForm.value);
    }else{
      obr=this.billService.addBill(this.billForm.value);
    }
    obr.subscribe(
      (data) => this.router.navigateByUrl("/bill")
    );
}



}



 