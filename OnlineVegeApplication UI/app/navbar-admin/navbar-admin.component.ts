import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavLink } from '../model/nav-link';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent implements OnInit {
  links:NavLink[];

  constructor(private adminService : AdminService,
    private router : Router) { 

      this.links=[
        {linkText:"Stock",link:'stock'},
        {linkText:"Customer Details",link:'customer'},
        {linkText:"Order Details",link:'order'},
        {linkText:"Bill Details",link:'bill'},
      {linkText:"Feedback Details",link:'feedback'}
        



        ];
        


    }


  ngOnInit(): void {
  }

  signOut(){
    this.adminService.currentAdmin=null;
    this.router.navigateByUrl("/");
  }


}
