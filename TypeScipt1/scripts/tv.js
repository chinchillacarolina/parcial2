var Series = /** @class */ (function () {
    function Series(temporadas, name, canal, id, resumen, disponible, imagen) {
        this.name = name;
        this.canal = canal;
        this.id = id;
        this.resumen = resumen;
        this.disponible = disponible;
        this.imagen = imagen;
        this.temporadas = temporadas;
    }
    return Series;
}());
export { Series };
