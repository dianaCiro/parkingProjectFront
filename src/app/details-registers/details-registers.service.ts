import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Observable';
import { DetailsRegisterModel } from '../model/detailsRegisters.model';

@Injectable()
export class DetailsRegistersService {

  constructor(private http: HttpClient) { }
  
    public getDetailsRegisters(): Observable<DetailsRegisterModel[]> {
      return this.http.get<DetailsRegisterModel[]>("http://localhost:8886/detailsRegisters");
       
    }

}
