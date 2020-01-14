import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicceService {

  //_url = 'http://192.168.1.105:5000/customer/add';
  _url = 'http://localhost:5000/customer/add';
  constructor(private _http:HttpClient) { }
  
  enroll(user){
    return this._http.post<any>(this._url,user)
  }
}
