import { Component, OnInit } from '@angular/core';
import { UploadfileService } from '../shared_resource/uploadfile.service';
import {HttpResponse,HttpHeaders} from '@angular/common/http';
import { GkService } from '../shared_resource/gk.service';
import { User } from '../auth/user';
import { AuthService } from '../auth/auth.service';
import { UserProfile } from './UserProfile';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  selectedFiles: FileList;
  currentFileUpload: File;

  constructor(private _uploadService: UploadfileService,private _authService:AuthService,private _gkService:GkService) { }

  user: User = new User();
  currentUser:UserProfile = new UserProfile();

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    console.log(this.currentFileUpload);
    this._uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      console.log(event);
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }

  getUserDetails(){
    return this._gkService.getUserDetails(this.user).subscribe((response:any) => {
      this.currentUser = response;
      console.log(this.currentUser)
    })
  }

  ngOnInit() {
   this.user =  this._authService.getUser();
   this.getUserDetails();
  }
  
}
