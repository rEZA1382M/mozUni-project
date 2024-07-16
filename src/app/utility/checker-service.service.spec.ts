import { TestBed } from '@angular/core/testing';

import { CheckerServiceService } from './checker-service.service';

describe('CheckerServiceService', () => {
  let service: CheckerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
