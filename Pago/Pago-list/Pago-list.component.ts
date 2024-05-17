import { Component, OnInit } from '@angular/core';
import { Reserva } from '../Reserva';
import { ReservaService } from '../Reserva.service'; 

@Component({
  selector: 'app-Reserva-list',
  templateUrl: './Reserva-list.component.html',
  styleUrls: ['./Reserva-list.component.css']
})
export class ReservaListComponent implements OnInit {
  reservas: Array <Reserva>=[];
  constructor(private reservaService: ReservaService) { }
  selectedReserva!: Reserva;
  selected: Boolean = false;
  ngOnInit(): void {
    this.getReservas;
  }
  getReservas(): void {
  this.reservaService.getReservas().subscribe((reservas) => {
    this.reservas = reservas;
  });
}
  onSelected(reserva: Reserva): void {
    this.selected = true;
    this.selectedReserva = reserva;
  }

}
