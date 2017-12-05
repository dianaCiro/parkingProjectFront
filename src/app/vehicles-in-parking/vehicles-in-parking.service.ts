import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import {VehicleInParkingModel } from '../model/vehiclesInParking';

@Injectable()
export class VehiclesInParkingService {
  constructor(private http: HttpClient) { }
  
    public getVehiclesInParking(): Observable<VehicleInParkingModel[]> {
      return this.http.get<VehicleInParkingModel[]>("http://localhost:8886/registers");
       
    }

}
