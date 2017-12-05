import { TestBed, inject } from '@angular/core/testing';

import { VehiclesInParkingService } from './vehicles-in-parking.service';

describe('VehiclesInParkingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VehiclesInParkingService]
    });
  });

  it('should be created', inject([VehiclesInParkingService], (service: VehiclesInParkingService) => {
    expect(service).toBeTruthy();
  }));
});
