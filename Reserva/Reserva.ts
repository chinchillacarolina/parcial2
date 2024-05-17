import { Monitoria } from "../Monitoria/Monitoria";
import { Pago } from "../Pago/Pago";
import { Usuario } from "../usuario/usuario";

export class Reserva {
    id1: number;
    fechaRealizacion: Date;
    fechaReserva: Date;
    monitoria: Monitoria;
    pago: Pago;
    usuario: Usuario;
    constructor(
        id1: number,
        fechaRealizacion: Date,
        fechaReserva: Date,
        monitoria: Monitoria,
        pago: Pago,
        usuario: Usuario
    )
    {
        this.id1=id1;
        this.fechaRealizacion=fechaRealizacion;
        this.fechaReserva=fechaReserva;
        this.monitoria=monitoria;
        this.pago=pago;
        this.usuario=usuario;
    }
}
