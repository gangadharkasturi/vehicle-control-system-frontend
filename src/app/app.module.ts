import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';

import {HttpClientModule} from '@angular/common/http';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthGuard } from './auth/auth.guard';
import {AuthService} from './auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AddMotorbikeComponent } from './add-motorbike/add-motorbike.component';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VehiclelistComponent,
    UserProfileComponent,
    NavBarComponent,
    AddMotorbikeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
