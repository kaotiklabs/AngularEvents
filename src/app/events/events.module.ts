import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsShowComponent } from './events-show/events-show.component';
import { EventFilterPipe } from './pipes/event-filter.pipe';
import { EventItemComponent } from './event-item/event-item.component';
import { EventAddComponent } from './event-add/event-add.component';
import { EventsService } from './services/events.service';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { SaveChangesGuardGuard } from './guards/save-changes-guard.guard';
import { EventDetailResolveGuard } from './guards/event-detail-resolve.guard';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EVENTS_ROUTES } from './events.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(EVENTS_ROUTES)
  ],
  declarations: [
    EventsShowComponent,
    EventFilterPipe,
    EventItemComponent,
    EventAddComponent,
    EventDetailComponent
  ],
  providers: [EventsService, SaveChangesGuardGuard, EventDetailResolveGuard],
})
export class EventsModule { }
