import { TestBed, inject } from '@angular/core/testing';

import { DetailsVehicleParkingService } from './details-vehicle-parking.service';

describe('DetailsVehicleParkingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsVehicleParkingService]
    });
  });

  it('should be created', inject([DetailsVehicleParkingService], (service: DetailsVehicleParkingService) => {
    expect(service).toBeTruthy();
  }));
});
