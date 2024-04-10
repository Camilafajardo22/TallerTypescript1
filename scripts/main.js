import { data } from './data.js';
var seriesTbody = document.getElementById('series');
var avgSeasonsElm = document.getElementById("average-seasons");
renderSeriesInTable(data);
avgSeasonsElm.innerHTML = "Average seasons: ".concat(getAverageSeasons(data));
function renderSeriesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    var totalSeries = 0;
    series.forEach(function (serie) { return totalSeries = totalSeries + 1; });
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    var averageSeasons = totalSeasons / totalSeries;
    return averageSeasons;
}
