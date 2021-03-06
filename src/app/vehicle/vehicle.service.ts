import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { VehicleModel } from '../model/vehicle.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VehicleService {
  constructor(private http: HttpClient) { }

  public getVehicles(): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>("http://localhost:8886/vehicle");
     
  }
}
