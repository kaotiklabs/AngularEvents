import { TestBed, async, inject } from '@angular/core/testing';

import { EventDetailResolveGuard } from './event-detail-resolve.guard';

describe('EventDetailResolveGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventDetailResolveGuard]
    });
  });

  it('should ...', inject([EventDetailResolveGuard], (guard: EventDetailResolveGuard) => {
    expect(guard).toBeTruthy();
  }));
});
