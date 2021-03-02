import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';

@Directive({
  selector: '[minDate]',
  providers: [{provide: NG_VALIDATORS, useExisting: MinDateDirective,
              multi: true}]
})

export class MinDateDirective implements Validator {
   @Input() minDate;

  constructor() { }

  validate(c: AbstractControl): { [key: string]: any } {
    if (this.minDate && c.value) { // Si recibimos algún valor
      const dateControl = new Date(c.value); // Valor actual
      const dateMin = new Date(this.minDate); // Fecha mínima
      if (dateMin > dateControl) {
        return {'minDate': true}; // Error devuelto
      }
    }
    return null; // Sin error
 }

}
