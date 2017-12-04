import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
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
  constructor(private VehicleService: VehicleService, private router: Router) { }

  ngOnInit() {
    this.loadVehicles();
  }

  private loadVehicles(): void {
   this.VehicleService.getVehicles().subscribe(res => {
     this.vehicles = res;
   });
  }

  public registerEntry(vehicle: VehicleModel): void{
    sessionStorage.setItem("vehicle" , JSON.stringify(vehicle));
    this.router.navigate(['/createEntry']);
  }

  public registerDeparture(vehicle: VehicleModel): void{
    sessionStorage.setItem('vehicle' , JSON.stringify(vehicle));
    this.router.navigate(['/createDeparture']);
  }
}
