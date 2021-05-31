import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-admin-form',
  templateUrl: './admin-form.component.html',
  styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnInit {

  adminIdfc : FormControl;
  namefc : FormControl;
  contactNumberfc : FormControl;
  
  adminForm : FormGroup;
  errMsg: string;
  isEditing : boolean;

  constructor(private adminService : AdminService, private router : Router,   private activatedRoute : ActivatedRoute) { 
    this.adminIdfc = new FormControl('0',[Validators.required]);
    this.namefc = new FormControl('', [Validators.required, Validators.minLength(3)]);
      this.contactNumberfc = new FormControl('', [Validators.required, Validators.pattern("[1-9][0-9]{9}")]);
 
  this.adminForm = new FormGroup({
      adminId : this.adminIdfc,
      name : this.namefc,
      contactNumber : this.contactNumberfc,
    });
   
     
      this.isEditing = false;
}

  ngOnInit(): void {
    let aid = this.activatedRoute.snapshot.params.aid;
    if (aid) {
      this.isEditing = true;
      this.adminService.viewAdmin(aid).subscribe(
        (data) => this.adminForm.setValue(data)
      );
    }
  }


  handleSubmit() {
    let obr = null;
   
    if (this.isEditing) {
      obr = this.adminService.updateAdmin(this.adminForm.value);
    } else {
      obr = this.adminService.addAdmin(this.adminForm.value);
    }
    obr.subscribe(
     
      (data) => { 
        this.router.navigateByUrl("/login"),  { queryParams: { msg: "Registration Successful with Admin Id: " + data.adminId } }});
      }

}
