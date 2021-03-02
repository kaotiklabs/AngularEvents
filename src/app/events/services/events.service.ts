import { Injectable } from '@angular/core';
import { IEvent } from '../interfaces/i-event';
import { EventsResponse, EventResponse, OkResponse } from '../../interfaces/responses';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';
import { SERVICES } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private eventURL = SERVICES + '/events';

  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<EventsResponse>(this.eventURL).pipe(
          map(response => response.events),
          catchError((resp: HttpErrorResponse) => throwError(`Error obteniendo eventos.
          Código de servidor: ${resp.status}. Mensaje: ${resp.message} Error: ${resp.error}`))
        );
    }

    addEvent(event: IEvent): Observable<IEvent> {
      return this.http.post<EventResponse>(this.eventURL, event).pipe(
        map(response => response.event),
        catchError((resp: HttpErrorResponse) => throwError(`Error añadiendo evento.
        Código de servidor: ${resp.status}. Mensaje: ${resp.message} Error: ${resp.error}`))
      );
    }

    deleteEvent(idEvent: number): Observable<boolean> {
      return this.http.delete<OkResponse>(this.eventURL + '/' + idEvent).pipe(
        map(response => response.ok),
        catchError((resp: HttpErrorResponse) => throwError(`Error borrando evento.
        Código de servidor: ${resp.status}. Mensaje: ${resp.message} Error: ${resp.error}`))
      );
    }


    getEvent(id: number): Observable<IEvent> {
      return this.http.get<EventResponse>(SERVICES + '/events/' + id).pipe(
        map(resp => {
          if (!resp.ok) { throw resp.error; }
          return resp.event;
        })
      );
    }
}
