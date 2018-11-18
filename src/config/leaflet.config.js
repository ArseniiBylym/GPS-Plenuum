import L from 'leaflet';

export const mapInitial = (elemId) => {
    let mymap = L.map(elemId).setView([51.505, -0.09], 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYXJzZW5paWJ5bHltIiwiYSI6ImNqb2xydjNwNTBqYXkzcXRvcjhpOGg1Y2gifQ.hTM0UIP1Yqf3scFUH68MUg'
    }).addTo(mymap);

}