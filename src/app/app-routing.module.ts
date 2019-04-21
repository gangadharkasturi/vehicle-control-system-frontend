import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';
import { LoginComponent } from './login/login.component';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { AddMotorbikeComponent } from './add-motorbike/add-motorbike.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'vehicleList', component: VehiclelistComponent, canActivate: [AuthGuard] },
  { path: 'addNewBike', component: AddMotorbikeComponent, canActivate: [AuthGuard] },
  { path: 'signUp', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
