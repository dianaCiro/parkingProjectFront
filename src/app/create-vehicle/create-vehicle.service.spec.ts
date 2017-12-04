import { TestBed, inject } from '@angular/core/testing';

import { CreateVehicleService } from './create-vehicle.service';

describe('CreateVehicleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateVehicleService]
    });
  });

  it('should be created', inject([CreateVehicleService], (service: CreateVehicleService) => {
    expect(service).toBeTruthy();
  }));
});
