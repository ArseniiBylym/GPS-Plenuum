import L from 'leaflet';

export const mapInitial = (id) => {

    let streets = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiYXJzZW5paWJ5bHltIiwiYSI6ImNqb2xydjNwNTBqYXkzcXRvcjhpOGg1Y2gifQ.hTM0UIP1Yqf3scFUH68MUg'
    })
    let outdoors = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.outdoors',
        accessToken: 'pk.eyJ1IjoiYXJzZW5paWJ5bHltIiwiYSI6ImNqb2xydjNwNTBqYXkzcXRvcjhpOGg1Y2gifQ.hTM0UIP1Yqf3scFUH68MUg'
    })
    let satellite = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.satellite',
        accessToken: 'pk.eyJ1IjoiYXJzZW5paWJ5bHltIiwiYSI6ImNqb2xydjNwNTBqYXkzcXRvcjhpOGg1Y2gifQ.hTM0UIP1Yqf3scFUH68MUg'
    })
    let map = L.map(id, {
        center: [51.505, -0.09],
        zoom: 13,
        layers: [streets, outdoors, satellite]
    })
    let baseMaps = {
        "Streets": streets,
        "Outdoors": outdoors,
        "Satelite": satellite
    };
    L.control.layers(baseMaps).addTo(map);

}