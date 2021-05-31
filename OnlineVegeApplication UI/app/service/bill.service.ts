import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Billingdetails } from '../model/billingdetails';

@Injectable({
providedIn: 'root'
})
export class BillService {

  // private _currentBill: BillingDetails;
private billApi : string;

  constructor(private client : HttpClient) {
    this.billApi = `${environment.apiPath}/bill`;
   }

  addBill(bill:Billingdetails):Observable<Billingdetails>{
    return this.client.post<Billingdetails>(this.billApi, bill);
  }

  updateBill(bill:Billingdetails):Observable<Billingdetails>{
    return this.client.put<Billingdetails>(`${this.billApi}/${bill.billingId}`,bill);
  }
  
  
  viewBill(billingId : number) : Observable< Billingdetails> {
    return this.client.get<Billingdetails>(`${this.billApi}/${billingId}`);
  }
  findAll() : Observable<Billingdetails[]> {
    return this.client.get<Billingdetails[]>(this.billApi);
  }

  removeBill(billingId : number):Observable<void>{
    return this.client.delete<void>(`${this.billApi}/${billingId}`);
  }
}
