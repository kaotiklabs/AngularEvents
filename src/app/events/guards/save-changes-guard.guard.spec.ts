import { TestBed, async, inject } from '@angular/core/testing';

import { SaveChangesGuardGuard } from './save-changes-guard.guard';

describe('SaveChangesGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveChangesGuardGuard]
    });
  });

  it('should ...', inject([SaveChangesGuardGuard], (guard: SaveChangesGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
