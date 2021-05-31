import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vegetable } from '../model/vegetable';
import { AdminService } from '../service/admin.service';
import { VegetablesService } from '../service/vegetables.service';

@Component({
  selector: 'app-veg-list',
  templateUrl: './veg-list.component.html',
  styleUrls: ['./veg-list.component.css']
})
export class VegListComponent implements OnInit {
  veg : Vegetable[];
  err : string;
  constructor(private vegService : VegetablesService,private adminService : AdminService,
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

  
  signOut(){
    this.adminService.currentAdmin=null;
    this.router.navigateByUrl("/dashboard1");
  }


}
