import { TestBed } from '@angular/core/testing';

import { WeinService } from './wein.service';

describe('WeinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeinService = TestBed.get(WeinService);
    expect(service).toBeTruthy();
  });
});
