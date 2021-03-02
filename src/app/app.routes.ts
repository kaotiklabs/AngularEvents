import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const APP_ROUTES: Route[] = [
{ path: 'welcome', component: WelcomeComponent },
{ path: 'events', loadChildren: './events/events.module#EventsModule' },
{ path: '', component: WelcomeComponent }, // Ruta que no coincide con ninguna de las anteriores
{ path: '**', component: WelcomeComponent }
];
