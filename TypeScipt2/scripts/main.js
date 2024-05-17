import { data } from './data.js';
var serieTable = document.getElementById('serie').getElementsByTagName('tbody')[0];
var promedioTemporadas = document.getElementById('promedioTemporadas');
function showAllData() {
    var totalTemporadas = 0;
    data.forEach(function (serie) {
        var row = serieTable.insertRow();
        row.innerHTML = "\n      <td>".concat(serie.id, "</td>\n      <td>").concat(serie.name, "</td>\n      <td>").concat(serie.canal, "</td>\n      <td>").concat(serie.temporadas, "</td>\n    ");
        totalTemporadas += serie.temporadas;
    });
    var promedio = totalTemporadas / data.length;
    promedioTemporadas.textContent = promedio.toFixed(2);
}
showAllData();
var serieNameCells = document.querySelectorAll('#serie td:nth-child(2)');
serieNameCells.forEach(function (cell) {
    cell.addEventListener('click', function () {
        var serieName = cell.textContent;
        var serie;
        data.forEach(function (item) {
            if (item.name === serieName) {
                serie = item;
            }
        });
        document.getElementById('serieInfo').innerHTML = "\n            <div class=\"card\" style=\"width: 18rem;\">\n                <img src=\"".concat(serie.imagen, "\" class=\"card-img-top images-doggos\" alt=\"...\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">").concat(serie.name, "</h5>\n                    <p class=\"card-text\">").concat(serie.resumen, "</p>\n                    <a href=").concat(serie.disponible, " class=\"btn btn-primary\">Mirar</a>\n                </div>\n            </div>\n        ");
    });
});
