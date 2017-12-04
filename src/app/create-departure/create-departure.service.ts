import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { VehicleModel } from '../model/vehicle.model';
import { Observable } from 'rxjs/Observable';
import { RestResponse } from '../model/RestResponse.mode';


@Injectable()
export class CreateDepartureService {

  constructor(private http: HttpClient) { }
  
    public validate(vehicle : VehicleModel): boolean{
      
      let isValid = true;
  
      if(!vehicle.numberPlate){isValid = false;}
      if(!vehicle.cylinder){isValid = false;}
      if(!vehicle.brand){isValid = false;}
      if(!vehicle.vehicleType){isValid = false;}
  
      return isValid;
    }
    
    public saveEntry(vehicle : VehicleModel): Observable<RestResponse> {
      return this.http.post<RestResponse>("http://localhost:8886/updateRegister",vehicle);
    }

}
