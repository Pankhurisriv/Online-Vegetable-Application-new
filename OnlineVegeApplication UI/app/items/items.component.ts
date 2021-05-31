import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Vegetable } from '../model/vegetable';
import { AdminService } from '../service/admin.service';
import { CustomerService } from '../service/customer.service';
import { VegetablesService } from '../service/vegetables.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  veg : Vegetable[];
  err : string;
  constructor(private vegService : VegetablesService,private customerService : CustomerService,
    private router : Router) { }

  ngOnInit(): void {
    this.vegService.findAll().subscribe(
      (data) => this.veg =data,
      (err) => {console.log (err); this.err="sorry. unable to retrieve data"}
    ); 
  }
  delete(vegId: number) {
    if (confirm("Are you sure?")) {
      this.vegService.removeVegetable(vegId).subscribe(
        () => { this.veg.splice(this.veg.findIndex(e => e.vegId == vegId), 1) }
      );
    }
  }
  // signOut(){
  //   this.customerService.currentCustomer=null;
  //   this.router.navigateByUrl("/dashboard");
  // }


}
