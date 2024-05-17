export class Series {
    id: number;
    name: string;
    canal: string;
    temporadas: number;
    resumen: string;
    disponible: string;
    imagen: string;
  
    constructor(id:number, name: string, canal: string, temporadas: number, resumen: string, disponible: string,imagen: string) {
      this.name = name;
      this.canal = canal ;
      this.id = id;
      this.resumen = resumen ;
      this.disponible = disponible ;
      this.imagen = imagen ;
      this.temporadas = temporadas;
      
    }
  }