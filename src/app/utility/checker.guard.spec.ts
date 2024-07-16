import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { checkerGuard } from './checker.guard';

describe('checkerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => checkerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
