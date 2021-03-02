import { Component, OnInit } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { EventsService } from '../services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-events-show',
  templateUrl: './events-show.component.html',
  styleUrls: ['./events-show.component.css']
})
export class EventsShowComponent implements OnInit {

    search = '';
    events: IEvent[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {

    this.events = [];

    this.eventsService.getEvents()
    .subscribe(
      events => this.events = events, // Success function
      error => console.error(error) // Error function (optional)
    );
  }

  orderDate(event: Event) {
    event.preventDefault(); // Cancelamos comportamiento por defecto
    this.search = '';
    this.events.sort((e1, e2) => e1.date.localeCompare(e2.date));
  }

  orderPrice(event: Event) {
    event.preventDefault();
    this.search = '';
    this.events.sort((e1, e2) => e1.price - e2.price);
  }

  getDeleteNotification(event: IEvent) {
    console.log('father received notification (event delete)');
    this.events = this.events.filter(e => e !== event);
  }

  // getAddNotification(event: IEvent) {
  //   this.search = '';
  //   this.events.push(event);
  //   console.log('father received notification (event added)');
  // }

}
