import React, {Component} from 'react';
import './Map.scss';
import { connect } from 'react-redux';
import {mapInitial} from '../../../../config/leaflet.config'
import L from 'leaflet';
import Constants from '../../../../lib/constants';

class Map extends Component {
    state = {}
    mapRef = React.createRef()

    componentDidMount = () => {
        console.log('from map')
        console.log(this.props.carsList)
        // const myMap = L.map('map').setView([51.505, -0.09], 12);

        mapInitial('map')

        // myMap.on('click', (e) => {
        //     console.log(e.latlng)
        // })

        // this.showCarsOnMap(myMap)
    }

    showCarsOnMap = (elem) => {
        const cars = this.props.carsList.filter((item, i) => {
            return item.isVisible
        })
        cars.forEach((car, i) => {
            let customIcon = L.icon({
                iconUrl: car.icon_url,
                iconSize:     [38, 95], // size of the icon
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            });
            L.marker([car.details.Position.lat, car.details.Position.long], {icon: customIcon}).addTo(elem);
        }) 
        
    }

    render() {
        return(
            <div className='Map'>
                <div ref={this.mapRef} id='map'></div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        carsList: state.allCars.cars,
        currentMap: state.mainMap.map
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMap: (elem) => {dispatch({type: Constants.ActionTypes.SET_MAP, elem: elem})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);