import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavLink } from '../model/nav-link';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
links:NavLink[];


  constructor(private customerService : CustomerService,
    private router : Router
    ) {    this.links=[
      {linkText:"Items",link:'items'},
      {linkText:"Cart",link:'cart'},
      {linkText:"Order", link:'order1'},
      // {linkText:"Bill",link:'bill'},
      {linkText:"Feedback",link:'feed'} ,
      {linkText:"Profile",link:'profile'} ,

    ];




    }

  ngOnInit() {
  }
  signOut(){
    this.customerService.currentCustomer=null;
    this.router.navigateByUrl("/");
  }

}
