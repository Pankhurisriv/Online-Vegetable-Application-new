import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Admin } from '../model/admin';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
  admin:Admin;
  infoMsg:string;
  
  constructor(  private adminService:AdminService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.admin=this.adminService.currentAdmin;

    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        if(params.msg){
          this.infoMsg=params.msg;
          this.admin=this.adminService.currentAdmin;
        }
      }
    );
  }


}
