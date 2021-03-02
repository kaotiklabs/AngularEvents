import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface ComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class SaveChangesGuardGuard implements  CanDeactivate <ComponentDeactivate> {

  canDeactivate(
    component: ComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
      // Recibimos el componente por parámetro → podemos acceder sus métodos
      return component.canDeactivate ? component.canDeactivate() : true;
    }

}

