import { TestBed } from '@angular/core/testing';

import { StudentCheckerService } from './student-checker.service';

describe('StudentCheckerService', () => {
  let service: StudentCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
