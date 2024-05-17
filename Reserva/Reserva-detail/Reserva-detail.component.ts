import { Component, OnInit, Input } from '@angular/core';
import { Reserva } from '../Reserva';

@Component({
  selector: 'app-Reserva-detail',
  templateUrl: './Reserva-detail.component.html',
  styleUrls: ['./Reserva-detail.component.css']
})
export class ReservaDetailComponent implements OnInit {
  @Input() reservaDetail!: Reserva;

  constructor() { }

  ngOnInit() {
  }

}
