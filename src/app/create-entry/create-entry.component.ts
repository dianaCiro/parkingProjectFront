import { Component, OnInit } from '@angular/core';
import { VehicleModel } from '../model/vehicle.model';
import { CreateEntryService } from './create-entry.service';
import { Router } from '@angular/router';
import { OK, DENIED_ENTRY, VEHICLE_IN_PARKING } from '../model/httpStatus';
import { RestResponse } from '../model/RestResponse.mode';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css'],
  providers: [CreateEntryService]
})
export class CreateEntryComponent implements OnInit {

  private vehicle: VehicleModel;
  private isValid: boolean = true;
  private message: string = "";
  private registerEntry: boolean = false;
  private messageEntry: string = "";
  constructor(private createEntryService: CreateEntryService, private router: Router) {
    if (sessionStorage.getItem("vehicle")) {
      this.vehicle = JSON.parse(sessionStorage.getItem("vehicle"));
    } else {
      this.vehicle = new VehicleModel();
    }
  }

  ngOnInit() {
  }

  public saveEntry(): void {
    this.isValid = this.createEntryService.validate(this.vehicle);
    if (this.isValid) {
      this.createEntryService.saveEntry(this.vehicle).subscribe(res => {
        this.changeMessage(res);
      });
    } 
  }

  public changeMessage(res: RestResponse): void {
    switch (res.responseCode) {
      case OK:
        this.registerEntry = true;
        this.router.navigate(['/detailsRegisters']);
        break;
      case DENIED_ENTRY:
        this.messageEntry = res.message + "!";
        this.message = " The vehicle is not in a day enabled to enter";
        this.isValid = false;
        break;
      case VEHICLE_IN_PARKING:
        this.messageEntry = "There is registration! ";
        this.message = res.message;
        this.isValid = false;
        break;
      default:
        this.messageEntry = "Danger!";
        this.registerEntry = false;
        this.message = res.message;
        this.isValid = false;

    }
  }
}
