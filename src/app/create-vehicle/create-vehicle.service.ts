import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http'

import { RestResponse } from '../model/RestResponse.mode';
import { VehicleModel } from '../model/vehicle.model';

@Injectable()
export class CreateVehicleService {

  constructor(private http: HttpClient) { }

  public validate(vehicle : VehicleModel): boolean{
    
    let isValid = true;

    if(!vehicle.numberPlate){isValid = false;}
    if(!vehicle.cylinder){isValid = false;}
    if(!vehicle.brand){isValid = false;}
    if(!vehicle.vehicleType){isValid = false;}

    return isValid;
  }
  
  public save(vehicle : VehicleModel): Observable<RestResponse> {
    return this.http.post<RestResponse>("http://localhost:8886/createVehicle",vehicle);
  }
}
