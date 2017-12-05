import { Component, OnInit } from '@angular/core';
import { VehicleModel } from '../model/vehicle.model';
import { CreateDepartureService } from './create-departure.service';
import { Router } from '@angular/router';
import { OK, VEHICLE_NOT_REGISTERED } from '../model/httpStatus';

@Component({
  selector: 'app-create-departure',
  templateUrl: './create-departure.component.html',
  styleUrls: ['./create-departure.component.css'],
  providers: [CreateDepartureService]
})
export class CreateDepartureComponent implements OnInit {

  private vehicle : VehicleModel;
  private isValid : boolean = true;
  private message : string = "";

  constructor(private createDepartureService : CreateDepartureService, private router : Router) { 
    if(sessionStorage.getItem("vehicle")){
      this.vehicle = JSON.parse(sessionStorage.getItem("vehicle"));
    }else{
      this.vehicle = new VehicleModel();
    }
  }

  ngOnInit() {
  }

  public saveDeparture() : void{
    this.isValid = this.createDepartureService.validate(this.vehicle);
    if(this.isValid){
      this.createDepartureService.saveEntry(this.vehicle).subscribe(res => {
        if(res.responseCode == OK){
          this.router.navigate(['/detailsRegisters']);
        }else if(res.responseCode == VEHICLE_NOT_REGISTERED){
          this.message = res.message;
          this.isValid = false;
        }else{
          this.message = res.message;
          this.isValid = false;
        }
      });
    }
  }
}
