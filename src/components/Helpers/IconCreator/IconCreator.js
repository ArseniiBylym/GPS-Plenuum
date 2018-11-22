import React from 'react';
import L from 'leaflet';
import {Marker, Popup} from 'react-leaflet';
import {Table} from 'reactstrap';
import './IconCreator.scss'


function IconCreator(props) {
    const { car } = props;
    const { details } = car

    let icon = L.icon({
        iconUrl: car.icon_url,
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
    });

    return (
        <Marker position={[details.Position.lat, details.Position.lng]} icon={icon}>
            <Popup>
                <div className="popupContainer">
                    <div className="popupContainer__main">
                        <Table borderless size='sm'>
                            <tbody>
                                <tr><td>Object</td><td>{car.name}</td></tr>
                                <tr><td>Position</td><td><a target='_blank' 
                                    href={`https://www.google.com/maps?q=${details.Position.lat}, ${details.Position.lng}&t=m`}>{details.Position.lat}°, {details.Position.lng}°</a></td></tr>
                                <tr><td>Altitude</td><td>{details.Altitude}</td></tr>
                                <tr><td>Speed</td><td>{car.speed}</td></tr>
                                <tr><td>Time</td><td>{details['Time (position)']}</td></tr>
                                <tr><td>Odometer</td><td>{details.Odometer}</td></tr>
                                <tr><td>Engine hours</td><td>{details['Engine Hours']}</td></tr>
                            </tbody>
                        </Table>
                    </div>
                    <div className="popupContainer__details"><a href='#'>Details</a></div>
                </div>
            </Popup>
        </Marker>
    )
}

export default IconCreator