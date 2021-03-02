import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MinDateDirective } from './validators/min-date.directive';

@NgModule({
  imports: [
    CommonModule,
    NgbModule
    ],
    declarations: [
    MinDateDirective,
    ConfirmModalComponent
    ],
    entryComponents: [
    ConfirmModalComponent
    ],
    exports: [
    MinDateDirective,
    ConfirmModalComponent
    ]
   })
export class SharedModule { }
