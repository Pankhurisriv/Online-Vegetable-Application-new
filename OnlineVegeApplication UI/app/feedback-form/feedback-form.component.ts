import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Feedback } from '../model/feedback';
import { FeedbackService } from '../service/feedback.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  feedbackIdfc : FormControl;
  customerIdfc : FormControl;
  vegIdfc : FormControl;
  ratingfc : FormControl;
  commentsfc : FormControl;
 


  feedbackForm : FormGroup;
  errorMessage : string;
  // errMsg: string;
  isEditing : boolean;

  constructor(private feedbackService : FeedbackService, private router : Router,   private activatedRoute : ActivatedRoute) {
    this.feedbackIdfc = new FormControl('0',[Validators.required]);
    this.customerIdfc = new FormControl('0',[Validators.required]);
    this.vegIdfc = new FormControl('', [Validators.required]);
      this.ratingfc = new FormControl('', [Validators.required]);
     this.commentsfc = new FormControl('',[Validators.required]);
  
     this.feedbackForm = new FormGroup({
      feedbackId : this.feedbackIdfc,
      customerId : this.customerIdfc,
     vegId : this.vegIdfc,
     rating : this.ratingfc,
      comments : this.commentsfc,
  
    });
    this.errorMessage = "";
    this.isEditing = false;


   }

  ngOnInit(): void {
    let fid = this.activatedRoute.snapshot.params.fid;
    if (fid) {
      this.isEditing = true;
      this.feedbackService.viewFeedback(fid).subscribe(
        (data) => this.feedbackForm.setValue(data)
      );
    }
  }

  handleSubmit() {
    let obr = null;
   
    if (this.isEditing) {
      obr = this.feedbackService.updateFeedback(this.feedbackForm.value);
    } else {
      obr = this.feedbackService.addFeedback(this.feedbackForm.value);
    }
    obr.subscribe(
     
      (data) => { 
        this.router.navigateByUrl("/"),  { queryParams: { msg: "Feedback is Successful with FeedbackId: " + data.feedbackId } }});
      }



}
