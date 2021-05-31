import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {
  cartIdfc : FormControl;
 customerIdfc : FormControl;
  vegIdfc : FormControl;


  cartForm : FormGroup;

  isEditing:boolean;
  constructor(private cartService : CartService, private router : Router, 
    private activatedRoute : ActivatedRoute) { 

      // let today = new Date().toISOString().substring(0, 10);

      this.cartIdfc= new FormControl(null);
      this.customerIdfc=new FormControl(null, Validators.required);
      this.vegIdfc= new FormControl(null,Validators.required);
    
     

      this.cartForm=new FormGroup({​​​​​​​​
        cartId : this.cartIdfc,
       customerId :this.customerIdfc,
       vegId :this.vegIdfc,
    
            }​​​​​​​​);

        this.isEditing=false;
    }

  ngOnInit(): void {
    let cartId = this.activatedRoute.snapshot.params.cartId;
    if(cartId){
      this.isEditing=true;
      this.cartService.viewCart(cartId).subscribe(
      (data) => this.cartForm.setValue(data));
    }
  }
  handleSubmit(){
    let obr= null;
    if(this.isEditing){
      obr=this.cartService.updateCart(this.cartForm.value);
    }else{
      obr=this.cartService.addCart(this.cartForm.value);
    }
    obr.subscribe(
      (data) => this.router.navigateByUrl("/cart")
    );
}


}
