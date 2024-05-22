"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_1 = require("./data");
function displaySeries(series) {
    var tableBody = document.getElementById('series-table-body');
    if (!tableBody)
        return;
    series.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td>").concat(serie.name, "</td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
        tableBody.appendChild(row);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    displaySeries(data_1.seriesData);
});
