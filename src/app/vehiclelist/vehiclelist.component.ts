import { Component, OnInit } from '@angular/core';
import { GkService } from '../shared_resource/gk.service';
import { MotorBike } from '../MotorBike';
import * as $ from 'jquery';

@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrls: ['./vehiclelist.component.css']
})
export class VehiclelistComponent implements OnInit {

  public allMotorBikesArr: MotorBike[];
  public modifyMessage: string;
  public deleteMessage: string;
  public modifiableFormData: MotorBike = new MotorBike();
  constructor(private _gkService: GkService) { }

  ngOnInit() {
    this.allMotorBikes();
  }

  allMotorBikes() {
    return this._gkService.allMotorBikes.subscribe((response: MotorBike[]) => {
      this.allMotorBikesArr = response;
    })
  }

  loadToBootstrapModel(motorBike: MotorBike) {
    this.modifiableFormData = motorBike;
  }

  modifyMotorBike(motorBike: MotorBike) {
    return this._gkService.modifyMotorBike(motorBike).subscribe((response: any) => {
      this.modifyMessage = response as string;
    }, error => {
      console.log(error)
    })
  }
  deleteMotorBike(motorBike: MotorBike) {
    let userconfirmation = confirm("Are you really want to delete bike: " + motorBike.bikeId + ' ?');
    if (userconfirmation == true) {
      return this._gkService.deleteMotorBike(motorBike).subscribe((response) => {
        this.deleteMessage = response as string;
        alert(this.deleteMessage);
        this.allMotorBikes();
      })
    }
    else {
      alert('You are aborted the operation')
    }

  }
}
