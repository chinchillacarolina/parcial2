import { Series } from "./tv";
import { data } from './data.js';



const serieTable = document.getElementById('serie').getElementsByTagName('tbody')[0];
const promedioTemporadas = document.getElementById('promedioTemporadas');





function showAllData() {
    let totalTemporadas = 0;
  data.forEach(serie => {
    const row = serieTable.insertRow();
    row.innerHTML = `
      <td>${serie.temporadas}</td>
      <td>${serie.name}</td>
      <td>${serie.canal}</td>
      <td>${serie.id}</td>
      <td><img src="${serie.imagen}" alt="${serie.name}" style="max-width: 100px; max-height: 100px;"></td>
    `;
    totalTemporadas += serie.temporadas; // Suma el número de temporadas de cada serie
});

const promedio = totalTemporadas / data.length; // Calcula el promedio de temporadas
promedioTemporadas.textContent = promedio.toFixed(2);
}

showAllData();

function getSeasons(series: Series[]): number {
    let total: number = 0;
    series.forEach((serie) => total = total + serie.temporadas);
    return total;
  }




