import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  adminId: number;
  infoMsg: string;
  errMsg: string;

  constructor(private adminService:AdminService,
    private router:Router,
    private routerData:ActivatedRoute
    ) { }

 
  ngOnInit() {
    this.routerData.queryParams
    .subscribe(
      (params) =>{
        if(params.msg){
          this.infoMsg=params.msg;
        }
      }
    );
  }

onSubmit(){
    this.adminService.viewAdmin(this.adminId)
    .subscribe(
      (data) => {
        this.adminService.currentAdmin=data;
        this.router.navigateByUrl("/dashboard1");        
      },
      (err)=>{
        this.errMsg=err.error;
      }
    );
  }
}
