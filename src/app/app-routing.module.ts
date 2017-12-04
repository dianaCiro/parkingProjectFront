import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { CreateDepartureComponent } from './create-departure/create-departure.component';


const routes: Routes= [
  {path: '', redirectTo: '/vehicle', pathMatch:'full'},
  {path : 'appComponent', component: AppComponent},
  {path : 'vehicle', component: VehicleComponent },
  {path : 'createVehicle', component: CreateVehicleComponent },
  {path : 'createEntry', component: CreateEntryComponent },
  {path : 'createDeparture', component: CreateDepartureComponent }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

