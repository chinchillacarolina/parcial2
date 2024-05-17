import { Series } from "./tv";
import { data } from './data.js';



const serieTable = document.getElementById('serie').getElementsByTagName('tbody')[0];
const promedioTemporadas = document.getElementById('promedioTemporadas');





function showAllData() {
    let totalTemporadas = 0;
  data.forEach(serie => {
    const row = serieTable.insertRow();
    row.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.canal}</td>
      <td>${serie.temporadas}</td>
    `;
    totalTemporadas += serie.temporadas; 
});

const promedio = totalTemporadas / data.length; 
promedioTemporadas.textContent = promedio.toFixed(2);
}

showAllData();


const serieNameCells = document.querySelectorAll('#serie td:nth-child(2)'); 


serieNameCells.forEach(cell => {
    cell.addEventListener('click', () => {
       
        const serieName = cell.textContent;
        let serie; 

        
        data.forEach(item => {
            if (item.name === serieName) {
                serie = item;
            }
        });

        
        document.getElementById('serieInfo').innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${serie.imagen}" class="card-img-top images-doggos" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${serie.name}</h5>
                    <p class="card-text">${serie.resumen}</p>
                    <a href=${serie.disponible} class="btn btn-primary">Mirar</a>
                </div>
            </div>
        `;
    });
});


 