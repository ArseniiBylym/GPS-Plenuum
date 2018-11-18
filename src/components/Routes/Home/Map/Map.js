import React, {Component} from 'react';
import './Map.scss';
import {mapInitial} from '../../../../config/leaflet.config'

class Map extends Component {
    state = {}

    componentDidMount = () => {
        mapInitial('map')
    }

    render() {
        return(
            <div className='Map'>
                <div id='map'></div>
            </div>
        )
    }
}

export default Map;