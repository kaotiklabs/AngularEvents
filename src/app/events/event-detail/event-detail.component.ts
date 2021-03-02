import { Component, OnInit } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { EventsService } from '../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: IEvent;

  constructor(private route: ActivatedRoute, private productService: EventsService, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id']; // Recibimos parámetro
    this.productService.getEvent(id)
    .subscribe(
      p => this.event = p,
      error => console.error(error)
    );
  }

  goBack() {
    this.router.navigate(['/events']);
  }

  edit() {
    this.router.navigate(['/event/edit', this.event.id]);
    }
}
