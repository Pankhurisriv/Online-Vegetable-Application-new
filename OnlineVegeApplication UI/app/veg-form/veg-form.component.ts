import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VegetablesService } from '../service/vegetables.service';

@Component({
  selector: 'app-veg-form',
  templateUrl: './veg-form.component.html',
  styleUrls: ['./veg-form.component.css']
})
export class VegFormComponent implements OnInit {

  vegIdfc : FormControl;
  namefc : FormControl;
  typefc : FormControl;
  pricefc : FormControl;
  quantityfc : FormControl;
  //  cartfc : FormControl;
  //  orderfc : FormControl;
  vegForm : FormGroup;
  isEditing:boolean;

  constructor(private vegService : VegetablesService, private router : Router, 
    private activatedRoute : ActivatedRoute) {      
       this.vegIdfc= new FormControl(null);
      this.namefc=new FormControl(null, [Validators.required, Validators.minLength(3)]);
      this.typefc= new FormControl(null,[Validators.required]);
      this.pricefc =new FormControl(null, [Validators.required,Validators.min(30),Validators.max(5000)]);
      this.quantityfc = new FormControl (null,[Validators.required,Validators.min(1)]);
      // this.cartfc = new FormControl (null);
      // this.orderfc = new FormControl (null);

      
      this.vegForm=new FormGroup({​​​​​​​​
        vegId :this.vegIdfc,
        name :this.namefc,
        price :this.pricefc,
        quantity :this.quantityfc,
        type :this.typefc,
        // cart:this.cartfc,
        // order : this.orderfc

            }​​​​​​​​);

        this.isEditing=false;}

  ngOnInit(): void {
    let vegId = this.activatedRoute.snapshot.params.vegId;
    if(vegId){
      this.isEditing=true;
      this.vegService.viewVegetable(vegId).subscribe(
      (data) => this.vegForm.setValue(data));
    }
  }

  handleSubmit(){
    let obr= null;
    if(this.isEditing){
      obr=this.vegService.updateVegetable(this.vegForm.value);
    }else{
      obr=this.vegService.addVegetable(this.vegForm.value);
    }
    obr.subscribe(
      (data) => this.router.navigateByUrl("/stock")
    );
}

}
