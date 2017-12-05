import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateEntryComponent } from './create-entry/create-entry.component';
import { CreateDepartureComponent } from './create-departure/create-departure.component';
import { DetailsRegistersComponent } from './details-registers/details-registers.component';
import { VehiclesInParkingComponent } from './vehicles-in-parking/vehicles-in-parking.component';


@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    CreateVehicleComponent,
    CreateEntryComponent,
    CreateDepartureComponent,
    DetailsRegistersComponent,
    VehiclesInParkingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
