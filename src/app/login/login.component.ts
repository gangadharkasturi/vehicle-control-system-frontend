import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {HttpResponse, HttpParams} from '@angular/common/http';
import { Routes, RouterModule, Router } from '@angular/router';
import { User } from '../auth/user';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user:User = {
    username:'',
    password:'',
  };
  private responseStatus:Number

  constructor(public _router:Router,private _authservice:AuthService) {
    
  }

  clickLogin(user:User){
    this._authservice.login(user).subscribe((response:any) => {
      response = JSON.parse(response);
      if (response.status === 'true') {
        this._authservice.setUser(user);
        this._authservice.validLogin();
        
      }else{
        alert('Invalid User')
      }
    });
  }

  ngOnInit() {

}
}
