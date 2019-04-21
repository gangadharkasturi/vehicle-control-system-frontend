import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  _isLoggedIn:Observable<boolean>;

  constructor(private _authservice:AuthService) { }

  ngOnInit() {
    this._isLoggedIn = this._authservice.isLoggedIn;
  }

  onLogOut(){
    this._authservice.logout();
  }
}
