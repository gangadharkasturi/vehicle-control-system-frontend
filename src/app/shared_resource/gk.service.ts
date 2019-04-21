import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders,HttpRequest } from '@angular/common/http';
import { User } from '../auth/user';
import { MotorBike } from '../MotorBike';

const httpHeaders = new HttpHeaders ({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*'
});

@Injectable({
  providedIn: 'root'
})
export class GkService {

  private baseUrl: string = "http://127.0.0.1:8080";

  constructor(private _http: HttpClient) { }
  getUserDetails(user: User) {
    let _params = {'userName':user.username}
    return this._http.get(this.baseUrl+'/getUser', { params: _params,headers:httpHeaders });
  }
  get allMotorBikes(){
    return this._http.get(this.baseUrl+'/getAllMotorBikes',{headers:httpHeaders})
  }
  modifyMotorBike(motorBike:MotorBike){
    return this._http.put(this.baseUrl+'/modifyMotorBike',motorBike,{responseType: 'text'});
  }
  addNewBike(motorBike:MotorBike){
     return this._http.post(this.baseUrl+'/saveMotorBike',motorBike,{headers:httpHeaders,responseType:'text'});

  }
  deleteMotorBike(motorBike:MotorBike){
    return this._http.delete(this.baseUrl+'/deleteMotorBikeById/'+motorBike.bikeId,{headers:httpHeaders,responseType:'text'})
  }
  signUp(user:User){
    return this._http.post(this.baseUrl+'/signUp',user,{headers:httpHeaders,responseType:'text'})
  }
}