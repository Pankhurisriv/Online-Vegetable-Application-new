import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Customer } from '../model/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

private _currentCustomer: Customer;
private customersApi : string;

  constructor(private client : HttpClient) { 

    this.currentCustomer=null;
    this.customersApi = `${environment.apiPath}/customer`;
  }

  get currentCustomer(){
    return this._currentCustomer;
  }

  set currentCustomer(cc:Customer){
    this._currentCustomer=cc;
  }

  
  
 viewCustomer(customerId:number):Observable<Customer>{
    return this.client.get<Customer>(`${this.customersApi}/${customerId}`);
  }

 addCustomer(customer:Customer):Observable<Customer>{
 
  return this.client.post<Customer>(this.customersApi,customer);
  }

  updateCustomer(customer :Customer):Observable<Customer>{
    return this.client.put<Customer>(`${this.customersApi}/${customer.customerId}`,customer);
  }
  removeCustomer(customerId : number) :Observable<void> {
    return this.client.delete<void>(`${this.customersApi}/${customerId}`);
  }
  findAll() : Observable<Customer[]> {
    return this.client.get<Customer[]>(this.customersApi);
  }
  
  }

