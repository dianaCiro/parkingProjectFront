import { TestBed, inject } from '@angular/core/testing';

import { CreateEntryService } from './create-entry.service';

describe('CreateEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateEntryService]
    });
  });

  it('should be created', inject([CreateEntryService], (service: CreateEntryService) => {
    expect(service).toBeTruthy();
  }));
});
