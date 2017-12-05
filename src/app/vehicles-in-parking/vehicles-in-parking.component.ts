import { Component, OnInit } from '@angular/core';
import { VehiclesInParkingService } from './vehicles-in-parking.service';
import { Router } from '@angular/router';
import { VehicleInParkingModel } from '../model/vehiclesInParking';

@Component({
  selector: 'app-vehicles-in-parking',
  templateUrl: './vehicles-in-parking.component.html',
  styleUrls: ['./vehicles-in-parking.component.css'],
  providers: [VehiclesInParkingService]
})
export class VehiclesInParkingComponent implements OnInit {

  private vehiclesInParking: Array<VehicleInParkingModel>

  constructor(private vehiclesInParkingService: VehiclesInParkingService, private router: Router) { }

  ngOnInit() {
    this.loadVehiclesInParking();
  }

  private loadVehiclesInParking(): void {
   this.vehiclesInParkingService.getVehiclesInParking().subscribe(res => {
     console.log(res);
     this.vehiclesInParking = res;
   });
  }
}
