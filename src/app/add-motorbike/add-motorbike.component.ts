import { Component, OnInit } from '@angular/core';
import { MotorBike } from '.././MotorBike';
import { GkService } from '../shared_resource/gk.service'

@Component({
  selector: 'app-add-motorbike',
  templateUrl: './add-motorbike.component.html',
  styleUrls: ['./add-motorbike.component.css']
})
export class AddMotorbikeComponent implements OnInit {

  public motorBike:MotorBike = new MotorBike();
  public resitrationMessage:string;
  constructor(private _gkService:GkService) { }

  ngOnInit() {
  }

  registerBike(bike:MotorBike){
    return this._gkService.addNewBike(bike).subscribe((response)=>{
      this.resitrationMessage = response as string;
    })


  }
}
