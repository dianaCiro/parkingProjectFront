import { TestBed, inject } from '@angular/core/testing';

import { CreateDepartureService } from './create-departure.service';

describe('CreateDepartureService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateDepartureService]
    });
  });

  it('should be created', inject([CreateDepartureService], (service: CreateDepartureService) => {
    expect(service).toBeTruthy();
  }));
});
