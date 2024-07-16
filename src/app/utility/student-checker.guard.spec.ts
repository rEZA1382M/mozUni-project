import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { studentCheckerGuard } from './student-checker.guard';

describe('studentCheckerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => studentCheckerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
