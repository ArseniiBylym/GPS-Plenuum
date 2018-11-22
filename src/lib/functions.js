import L from 'leaflet'

export const findZoneCenter = (pointsArr) => {
    console.log(pointsArr)
    let lat = null;
    let lng = null;

    for(let i = 0; i < pointsArr.length; i++) {
        console.log(pointsArr[i][0])
        console.log(pointsArr[i][1])
        lat += pointsArr[i][0];
        lng += pointsArr[i][1];
    }

    const point = {
        lat: lat / pointsArr.length,
        lng: lng / pointsArr.length,
    }
    
    return point
}

export const createEventPopup = (event, map) => {
    
    L.popup()
        .setLatLng(event.details.Position)
        .setContent(`
            <div className="popupContainer">
                <div className="popupContainer__main">
                    <table borderless size='sm'>
                        <tbody>
                            <tr><td>Object</td><td>${event.object}</td></tr>
                            <tr><td>Event</td><td>${event.type}</td></tr>
                            <tr><td>Altitude</td><td>${event.details.altitude}</td></tr>
                            <tr><td>Speed</td><td>${event.details.speed}</td></tr>
                            <tr><td>Address</td><td>${event.details.address}</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>`
        )
        .openOn(map);
}