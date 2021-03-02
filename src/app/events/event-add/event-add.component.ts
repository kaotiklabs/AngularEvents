import { Component, Directive, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { EventsService } from '../services/events.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ComponentDeactivate } from '../guards/save-changes-guard.guard';
import { ConfirmModalComponent } from '../../shared/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit, ComponentDeactivate {

  newEvent: IEvent;
  fechaHoy: Date;
  actualizado = false;

  @Output() notifyAddItem = new EventEmitter<IEvent>();

  constructor(
    private eventsService: EventsService,
    private modalService: NgbModal,
    private router: Router
  ) { }

  ngOnInit() {
    this.restartForm();
    this.fechaHoy = new Date(Date.now());
  }

  restartForm() {
    this.newEvent = {
      title: '',
      description: '',
      image: '',
      price: 0,
      date: ''
    };
  }

  canDeactivate(): Promise<boolean> {
    if (this.actualizado) { // Si acabamos de añadir producto, devolvemos Promise<true>
      return new Promise((resolve, reject) => resolve(true));
    }

    const modalRef = this.modalService.open(ConfirmModalComponent);
    modalRef.componentInstance.title = 'Añadir producto';
    modalRef.componentInstance.body = 'Los cambios no se guardarán. ¿Desea salir?';
    return modalRef.result // Cuando cerramos con close se devuelve el booleano recibido
                   .catch(() => false); // Cuando llamamos a dismiss devolvemos Promise<false>
  }

  changeImage(fileInput: HTMLInputElement) {
    if (!fileInput.files || fileInput.files.length === 0) { return; }
    const reader: FileReader = new FileReader();
    reader.readAsDataURL(fileInput.files[0]);
    reader.addEventListener('loadend', e => {
    this.newEvent.image = reader.result;
    });
  }

  addEvent() {

    this.eventsService.addEvent(this.newEvent).subscribe(
      event => {
        console.log('child send notification (add event)');
        this.notifyAddItem.emit(event);
        this.actualizado = true;
        this.restartForm();
        this.router.navigate(['/events']);
      },
      error => console.error(error) // Error function (optional)
    );

  }

  validClasses(ngModel: NgModel, validClass: string, errorClass: string) {
    return {
    [validClass]: ngModel.touched && ngModel.valid,
    [errorClass]: ngModel.touched && ngModel.invalid
    };
    }

}
