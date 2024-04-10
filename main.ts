import { Serie } from './serie.js';

import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;

  

const avgSeasonsElm: HTMLElement = document.getElementById("average-seasons")!;

renderSeriesInTable(data);

avgSeasonsElm.innerHTML = `Average seasons: ${getAverageSeasons(data)}`


function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando cursos');
    series.forEach((serie) => {
      let trElement = document.createElement("tr");

      trElement.innerHTML = `<td>${serie.id}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
    });
  }
  


function getAverageSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    let totalSeries: number = 0;
    series.forEach((serie) => totalSeries = totalSeries + 1);
    series.forEach((serie) => totalSeasons =totalSeasons + serie.seasons);

    let averageSeasons: number = totalSeasons/totalSeries;

    return averageSeasons;
}
