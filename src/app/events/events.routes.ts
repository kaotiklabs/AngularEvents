import { Route } from '@angular/router';

import { EventsShowComponent } from './events-show/events-show.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { EventDetailResolveGuard } from './guards/event-detail-resolve.guard';
import { SaveChangesGuardGuard } from './guards/save-changes-guard.guard';

export const EVENTS_ROUTES: Route[] = [
{ path: '', component: EventsShowComponent },
{ path: 'add', canDeactivate: [SaveChangesGuardGuard], component: EventAddComponent },
{
    path: ':id',
    component: EventDetailComponent,
    resolve: {
      event: EventDetailResolveGuard
    }
  }
];
