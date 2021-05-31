import { Component, OnInit } from '@angular/core';
import { Feedback } from '../model/feedback';
import { FeedbackService } from '../service/feedback.service';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

feedback : Feedback[];
err : string;
  constructor(private feedbackService : FeedbackService) { }

  ngOnInit(): void {
    this.feedbackService.findAll().subscribe(
      (data) => this.feedback=data,
      (err) => {console.log (err); this.err="sorry. unable to retrieve data"}
    );
  }

}
