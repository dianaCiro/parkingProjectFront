import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes= [
  {path: '', redirectTo: '/vehicleComponent', pathMatch:'full'},
  {path : 'appComponent', component: AppComponent},
  {path : 'vehicleComponent', component: VehicleComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

