import { Component, OnInit } from '@angular/core';

import { VehicleService } from './vehicle.service';
import { VehicleModel } from '../model/vehicle.model';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
  providers:[VehicleService]
})
export class VehicleComponent implements OnInit {
  private vehicles: Array<VehicleModel>
  constructor(private VehicleService: VehicleService) { }

  ngOnInit() {
    this.loadVehicles();
  }

  private loadVehicles(): void {
   this.VehicleService.getVehicles().subscribe(res => {
     this.vehicles = res;
     console.log(res);
   });
  }
}
