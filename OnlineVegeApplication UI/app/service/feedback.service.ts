import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Feedback } from '../model/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private _currentFeedback: Feedback;


  private feedbackApi :string;

  constructor(private client : HttpClient) { 
    this.currentFeedback=null;
    this.feedbackApi = `${environment.apiPath}/feedback`;
  }
  get currentVeg(){
    return this._currentFeedback;
  }

  set currentFeedback(cf:Feedback){
    this._currentFeedback=cf;
  }
  
  addFeedback(feedback : Feedback) : Observable<Feedback> {
    return this.client.post<Feedback>(this.feedbackApi, feedback);
}
viewFeedback(feedbackId : number) : Observable<Feedback> {
  return this.client.get<Feedback>(`${this.feedbackApi}/${feedbackId}`);
}
updateFeedback(feedback :Feedback):Observable<Feedback>{
  return this.client.put<Feedback>(`${this.feedbackApi}/${feedback.feedbackId}`,feedback);
}
findAll() : Observable<Feedback[]> {
  return this.client.get<Feedback[]>(this.feedbackApi);
}
}
