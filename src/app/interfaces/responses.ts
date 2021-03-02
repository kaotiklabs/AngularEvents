import { IEvent } from '../events/interfaces/i-event';

export interface EventsResponse {
    ok: boolean;
    events?: IEvent[];
    error?: string;
}

export interface EventResponse {
    ok: boolean;
    event: IEvent;
    error?: string;
    errors?: string[];
}


export interface OkResponse {
    ok: boolean;
    error?: string;
}
