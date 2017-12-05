import { Component, OnInit } from '@angular/core';
import { VehicleModel } from '../model/vehicle.model';
import { CreateVehicleService } from './create-vehicle.service';
import { OK, EXIST_VEHICLE } from '../model/httpStatus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css'],
  providers: [CreateVehicleService]
})
export class CreateVehicleComponent implements OnInit {

  private vehicle: VehicleModel;
  private isValid: boolean = true;
  private message: string = "";

  constructor(private createVehicleService: CreateVehicleService, private router: Router) {

    this.vehicle = new VehicleModel();

  }

  ngOnInit() {
  }

  public save(): void {
    this.isValid = this.createVehicleService.validate(this.vehicle);
    if (this.isValid) {
      this.createVehicleService.save(this.vehicle).subscribe(res => {
        console.log(res.responseCode);
        if (res.responseCode == OK) {
          this.router.navigate(['/vehicle']);
        } else if (res.responseCode == EXIST_VEHICLE) {
          this.message = res.message;
          this.isValid = false;
        } else {
          this.message = res.message;
          this.isValid = false;
        }
      });
    } else {
      this.message = "Fields with * are required";
    }
  }
}
