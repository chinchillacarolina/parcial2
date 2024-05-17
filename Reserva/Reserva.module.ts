import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReservaListComponent} from './Reserva-list/Reserva-list.component'
import { ReservaDetailComponent } from './Reserva-detail/Reserva-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReservaListComponent, ReservaDetailComponent],
  exports:[ReservaListComponent]
})
export class ReservaModule { }
