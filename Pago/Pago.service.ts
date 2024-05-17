import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Reserva } from './Reserva';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class ReservaService {
private apiUrl: string = environment.baseUrl+'reservas'
constructor(private http: HttpClient) { }
getReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.apiUrl);
  }

}
