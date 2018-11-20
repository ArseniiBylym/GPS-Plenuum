import React from 'react';
import L from 'leaflet';
import {Marker, Popup} from 'react-leaflet';
import {Table} from 'reactstrap';


export function createCarsFunc (cars){
    console.log(arguments)
    console.log(cars)
    const carsIcons = cars.map((item, i) => {
        let icon = L.icon({
            iconUrl: item.icon_url,
            iconSize: [38, 95],
            iconAnchor: [22, 94],
            popupAnchor: [-3, -76],
        });
        const {details} = item
        return <Marker position={[details.Position.lat, details.Position.long]} icon={icon }>
                    <Popup>
                        <div className="popupContainer">
                            <div className="popupContainer__main">
                                <Table borderless>
                                    <tbody>
                                        <tr><td>Object</td><td>{item.name}</td></tr>
                                        <tr><td>Position</td><td><a href='#'>{details.Position.lat}°, {details.Position.long}°</a></td></tr>
                                        <tr><td>Altitude</td><td>{details.Altitude}</td></tr>
                                        <tr><td>Speed</td><td>{item.speed}</td></tr>
                                        <tr><td>Time</td><td></td>{details['Time (position)']}</tr>
                                        <tr><td>Odometer</td><td>{details.Odometer}</td></tr>
                                        <tr><td>Engine hours</td><td>{details['Engine Hours']}</td></tr>
                                    </tbody>
                                </Table>
                            </div>
                            <div className="popupContainer__details"><a href='#'>Details</a></div>
                        </div>
                    </Popup>
                </Marker>
    })

    return carsIcons
}