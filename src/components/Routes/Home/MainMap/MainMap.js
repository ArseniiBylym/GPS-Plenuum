import React, { Component } from 'react';
import './MainMap.scss';
import { connect } from 'react-redux';
import { mapInitial } from '../../../../config/leaflet.config'
import L from 'leaflet';
import Constants from '../../../../lib/constants';
import { Map, TileLayer, Marker, Popup, LayerGroup, LayersControl } from 'react-leaflet'
import { token } from '../../../../config/leaflet.config'
import IconsCreator from '../../../Helpers/IconCreator/IconsCreator'

const { BaseLayer, Overlay } = LayersControl
const MapContext = React.createContext()

class MainMap extends Component {
    state = {}
    mapRef = React.createRef()

    render() {
        const position = [51.505, -0.09]

        let carsIcons = null;
        if (this.props.carsList.length > 0) {
            const visibleCars = this.props.carsList.filter((item, i) => {
                return item.isVisible === true
            })
            carsIcons = visibleCars.map((item, i) => {
                return <IconsCreator key={item.name} index={i} car={item} />
            })
        }

        return (
            <MapContext.Provider map={this.mapRef.current}>
                <Map ref={this.mapRef} className='MainMap' center={position} zoom={12}>
                    <LayersControl position="topright">
                        <BaseLayer checked name="OpenStreetMap.Mapnik">
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </BaseLayer>
                        <BaseLayer name="OpenStreetMap.BlackAndWhite">
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                            />
                        </BaseLayer>
                        <BaseLayer name="Satelite">
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url={`https://api.tiles.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=${token}`}
                            />
                        </BaseLayer>
                        <BaseLayer name="Dark">
                            <TileLayer
                                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url={`https://api.tiles.mapbox.com/v4/mapbox.dark/{z}/{x}/{y}.png?access_token=${token}`}
                            />
                        </BaseLayer>
                        {carsIcons}
                    </LayersControl>
                </Map>
            </MapContext.Provider>
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
        // setMap: (elem) => { dispatch({ type: Constants.ActionTypes.SET_MAP, elem: elem }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMap);