import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vegetable } from '../model/vegetable';

@Injectable({
  providedIn: 'root'
})
export class VegetablesService {

  private _currentVeg: Vegetable;


  private vegApi :string;

  constructor(private client : HttpClient) { 
    this.currentVeg=null;
    this.vegApi = `${environment.apiPath}/veg`;
  }
  get currentVeg(){
    return this._currentVeg;
  }

  set currentVeg(cv:Vegetable){
    this._currentVeg=cv;
  }


  addVegetable(vegetable:Vegetable):Observable<Vegetable>{
    return this.client.post<Vegetable>(this.vegApi, vegetable);
  }

  updateVegetable(vegetable:Vegetable):Observable<Vegetable>{
    return this.client.put<Vegetable>(`${this.vegApi}/${vegetable.vegId}`,vegetable);
  }

  removeVegetable(vegId : number):Observable<void>{
    return this.client.delete<void>(`${this.vegApi}/${vegId}`);
  }
  viewVegetable(vegId : number) : Observable< Vegetable> {
    return this.client.get<Vegetable>(`${this.vegApi}/${vegId}`);
  }
  findAll() : Observable<Vegetable[]> {
    return this.client.get<Vegetable[]>(this.vegApi);
  }
 
 

}
