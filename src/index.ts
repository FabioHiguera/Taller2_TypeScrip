import { seriesData } from './data';
import { Serie } from './serie';

console.log(seriesData);

function showSeriesDetail(serie: { image: string; name: string | null; description: string | null; }) {
    const seriesDetailImage = document.getElementById('series-detail-image') as HTMLImageElement;
    const seriesDetailName = document.getElementById('series-detail-name');
    const seriesDetailDescription = document.getElementById('series-detail-description');

    if (seriesDetailImage && seriesDetailName && seriesDetailDescription) {
        seriesDetailImage.src = serie.image;
        seriesDetailName.textContent = serie.name;
        seriesDetailDescription.textContent = serie.description;
    }
}

function displaySeries(series: Serie[]) {
    const tableBody = document.getElementById('series-table-body');
    if (!tableBody) return;

    let totalSeasons = 0;

    series.forEach(serie => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${serie.id}</td>
            <td>${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        tableBody.appendChild(row);
        
        row.addEventListener('click', () => {
            showSeriesDetail(serie);
        });

        tableBody.appendChild(row);

        totalSeasons += serie.seasons;
    });

    const averageSeasons = totalSeasons / series.length;
    const averageSeasonsCell = document.getElementById('average-seasons');
    if (averageSeasonsCell) {
        averageSeasonsCell.textContent = averageSeasons.toString();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    displaySeries(seriesData);
});