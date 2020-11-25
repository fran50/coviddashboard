import { TestBed } from '@angular/core/testing';

import { CoviService } from './covi.service';

describe('CoviService', () => {
  let service: CoviService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoviService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
