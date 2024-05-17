import { data } from './data.js';
var serieTable = document.getElementById('serie').getElementsByTagName('tbody')[0];
var promedioTemporadas = document.getElementById('promedioTemporadas');
function showAllData() {
    var totalTemporadas = 0;
    data.forEach(function (serie) {
        var row = serieTable.insertRow();
        row.innerHTML = "\n      <td>".concat(serie.temporadas, "</td>\n      <td>").concat(serie.name, "</td>\n      <td>").concat(serie.canal, "</td>\n      <td>").concat(serie.id, "</td>\n      <td><img src=\"").concat(serie.imagen, "\" alt=\"").concat(serie.name, "\" style=\"max-width: 100px; max-height: 100px;\"></td>\n    ");
        totalTemporadas += serie.temporadas; // Suma el número de temporadas de cada serie
    });
    var promedio = totalTemporadas / data.length; // Calcula el promedio de temporadas
    promedioTemporadas.textContent = promedio.toFixed(2);
}
showAllData();
function getSeasons(series) {
    var total = 0;
    series.forEach(function (serie) { return total = total + serie.temporadas; });
    return total;
}
