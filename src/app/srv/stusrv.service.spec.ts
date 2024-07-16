import { TestBed } from '@angular/core/testing';

import { StusrvService } from './stusrv.service';

describe('StusrvService', () => {
  let service: StusrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StusrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
