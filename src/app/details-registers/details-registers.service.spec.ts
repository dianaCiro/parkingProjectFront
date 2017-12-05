import { TestBed, inject } from '@angular/core/testing';

import { DetailsRegistersService } from './details-registers.service';

describe('DetailsRegistersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsRegistersService]
    });
  });

  it('should be created', inject([DetailsRegistersService], (service: DetailsRegistersService) => {
    expect(service).toBeTruthy();
  }));
});
