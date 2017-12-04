import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsVehicleParkingComponent } from './details-vehicle-parking.component';

describe('DetailsVehicleParkingComponent', () => {
  let component: DetailsVehicleParkingComponent;
  let fixture: ComponentFixture<DetailsVehicleParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsVehicleParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsVehicleParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
