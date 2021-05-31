import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Admin } from '../model/admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _currentAdmin: Admin;
private adminApi : string;
  constructor(private client : HttpClient) { 
    this.currentAdmin=null;
    this.adminApi = `${environment.apiPath}/admin`;
  }

  get currentAdmin(){
    return this._currentAdmin;
  }

  set currentAdmin(ca:Admin){
    this._currentAdmin=ca;
  }

  viewAdmin(adminId:number):Observable<Admin>{
    return this.client.get<Admin>(`${this.adminApi}/${adminId}`);
  }
  addAdmin(admin:Admin):Observable<Admin>{
    return this.client.post<Admin>(this.adminApi,admin);
  }
  updateAdmin(admin:Admin):Observable<Admin>{
    return this.client.put<Admin>(`${this.adminApi}/${admin.adminId}`,admin);
  }
  removeAdmin(adminId : number) :Observable<void> {
    return this.client.delete<void>(`${this.adminApi}/${adminId}`);
  }





}
