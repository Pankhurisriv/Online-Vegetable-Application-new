import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../service/customer.service';
import {Customer} from "../model/Customer";
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent implements OnInit {

  customerIdfc : FormControl;
  namefc : FormControl;
  mobileNumberfc : FormControl;
  emailIdfc : FormControl;
 passwordfc : FormControl;
 flatNofc : FormControl;
  buildingNamefc : FormControl;
  areafc: FormControl;
  cityfc : FormControl;
  statefc: FormControl;
  pincodefc:FormControl;

  customerForm : FormGroup;


  errorMessage : string;
 
  isEditing : boolean;


  constructor(private customerService : CustomerService, private router : Router,   private activatedRoute : ActivatedRoute) { 
  

   this.customerIdfc = new FormControl('0',[Validators.required]);
    this.namefc = new FormControl('', [Validators.required, Validators.minLength(3)]);
    this.mobileNumberfc = new FormControl('', [Validators.required, Validators.pattern("[1-9][0-9]{9}")]);
   this.emailIdfc = new FormControl('',[Validators.required]);
   this.passwordfc = new FormControl('',[Validators.required]);
   this.flatNofc = new FormControl('', Validators.required);
  this.buildingNamefc =new FormControl('', Validators.required);
  this.areafc = new FormControl('', Validators.required);
  this.cityfc = new FormControl('', Validators.required);
  this.statefc = new FormControl('', Validators.required);
  this.pincodefc = new FormControl('', Validators.required);


  this.customerForm = new FormGroup({
    customerId : this.customerIdfc,
    name : this.namefc,
    mobileNumber : this.mobileNumberfc,
    emailId : this.emailIdfc,
    password : this.passwordfc,
    flatNo : this.flatNofc,
    buildingName : this.buildingNamefc,
    area : this.areafc,
    city : this.cityfc,
    state : this.statefc,
    pincode : this.pincodefc

  });
 
  this.errorMessage = "";
    this.isEditing = false;
 }

 ngOnInit() : void {
  let cid = this.activatedRoute.snapshot.params.cid;
  if (cid) {
    this.isEditing = true;
    
    this.customerService.viewCustomer(cid).subscribe(
      (data) => {this.customerForm.setValue({

customerId : data.customerId,
name : data.name,
mobileNumber : data.mobileNumber,
emailId : data.emailId,
password : data.password,
flatNo : data.address.flatNo,
buildingName : data.address.buildingName,
area : data.address.area,
city : data.address.city,
state : data.address.state,
pincode : data.address.pincode
})}
    );
  }

} 
// control(controlName: string) {
//   return this.customerForm.controls[controlName];
// }


handleSubmit() {
  let customer : Customer = {
    address:{
     
      flatNo : this.customerForm.value.flatNo,
      buildingName : this.customerForm.value.buildingName,
      area : this.customerForm.value.area,
      city : this.customerForm.value.city,
      state : this.customerForm.value.state,
      pincode : this.customerForm.value.pincode
    },
    customerId : this.customerForm.value.customerId,
    name : this.customerForm.value.name,
    mobileNumber : this.customerForm.value.mobileNumber,
    emailId : this.customerForm.value.emailId,
   password:this.customerForm.value.password
   
  };

this.errorMessage=null;

this.customerService.updateCustomer(this.customerForm.value).subscribe(
  (data) => this.router.navigateByUrl("/"), 
  (err) =>  {
      console.log(err);
      this.errorMessage = "Sorry, Could Not Update"; 
  }

 );

    }


}
