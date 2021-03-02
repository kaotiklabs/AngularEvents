import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { EventsService } from '../services/events.service';
import { ActivatedRoute } from '@angular/router';
import { ComponentDeactivate } from '../guards/save-changes-guard.guard';
import { ConfirmModalComponent } from '../../shared/confirm-modal/confirm-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  actualizado = false;

  @Input() event: IEvent;
  @Output() notifyDeleteItem = new EventEmitter<void>();

  constructor(
    private eventsService: EventsService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  deleteEvent(): Promise<boolean> {

    if (this.actualizado) { // Si acabamos de eliminar producto, devolvemos Promise<true>
      return new Promise((resolve, reject) => resolve(true));
    }

    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.title = 'Eliminar evento';
    modalRef.componentInstance.body = 'El evento se eliminará. ¿Desea continuar?';

    modalRef.result.then(resp => {
      if (resp) {
        console.log('Eliminar Confirmado');
        this.deleteConfirmedEvent();
      } else {
        console.log('Eliminar Cancelado');
      }

    });

    return modalRef.result // Cuando cerramos con close se devuelve el booleano recibido
                   .catch(() => false); // Cuando llamamos a dismiss devolvemos Promise<false>

  }

  deleteConfirmedEvent() {
    this.eventsService.deleteEvent(this.event.id).subscribe(
      ok => this.notifyDeleteItem.emit(),
      error => console.error(error)
    );
  }

}
