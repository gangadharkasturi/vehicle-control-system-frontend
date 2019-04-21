import { Injectable } from '@angular/core';
import { Router, Route } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import {HttpClient, HttpRequest, HttpEvent,HttpHeaders,HttpParams} from '@angular/common/http';
const httpHeaders = new HttpHeaders ({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*'
});

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:User = new User;
  setUser(user:User){
    this.user = user;
  }

  getUser(){
    return this.user;
  }
  private baseUrl:string = 'http://127.0.0.1:8080'
  private loggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private _router:Router,private _http:HttpClient) { }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  logout(){
    this.loggedIn.next(false);
    this._router.navigate(['/login']);
  }

  validLogin(){
    this.loggedIn.next(true);
    this._router.navigate(['/user']);
  }
  login(user:User){
    let _params = {'userName':user.username,'password':user.password};

    return this._http.get(this.baseUrl+'/login',{params:_params,headers:httpHeaders,'responseType':'text'});

    
    // if(login.username==''&&login.password==''){
    //   this.loggedIn.next(true);
    //   
    // }else{
    //   alert('Invalid Credentials');
    // }
  }

  
}
