import { Component, OnInit } from '@angular/core';
import { VehicleModel } from '../model/vehicle.model';
import { CreateEntryService } from './create-entry.service';
import { Router } from '@angular/router';
import { OK } from '../model/httpStatus';

@Component({
  selector: 'app-create-entry',
  templateUrl: './create-entry.component.html',
  styleUrls: ['./create-entry.component.css'],
  providers: [CreateEntryService]
})
export class CreateEntryComponent implements OnInit {
 
  private vehicle : VehicleModel;
  private isValid : boolean = true;
  private message : string = "";

  constructor(private createEntryService : CreateEntryService, private router : Router) { 
    if(sessionStorage.getItem("vehicle")){
      this.vehicle = JSON.parse(sessionStorage.getItem("vehicle"));
    }else{
      this.vehicle = new VehicleModel();
    }
  }

  ngOnInit() {
  }

  public saveEntry() : void{
    this.isValid = this.createEntryService.validate(this.vehicle);
    if(this.isValid){
      this.createEntryService.saveEntry(this.vehicle).subscribe(res => {
        console.log(res.responseCode);
        if(res.responseCode == OK){
          this.router.navigate(['/detailsRegisters']);
        }else{
          this.message = res.message;
          this.isValid = false;
        }
      });
    }else{
      this.message = "Fields with * are required";
    }
  }
}
