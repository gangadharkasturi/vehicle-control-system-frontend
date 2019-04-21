import { Component, OnInit } from '@angular/core';
import { GkService } from '../shared_resource/gk.service';
import { User } from '../auth/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  
  user:User = new User(); 
  constructor(private _gkService:GkService) { }

  signUpUser(user:User){
    return this._gkService.signUp(user).subscribe((response:any) => {
      response = JSON.parse(response);
      if(response.status === 'true'){
        alert(response.message);
        this.user = new User(); //so that the form will be reset in front end after addition of user
      }
    })
  }

  ngOnInit() {
  }

}
