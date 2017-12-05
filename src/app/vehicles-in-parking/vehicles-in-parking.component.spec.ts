import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesInParkingComponent } from './vehicles-in-parking.component';

describe('VehiclesInParkingComponent', () => {
  let component: VehiclesInParkingComponent;
  let fixture: ComponentFixture<VehiclesInParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesInParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesInParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
