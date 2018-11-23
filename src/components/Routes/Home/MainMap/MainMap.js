import React, { Component, Fragment } from 'react';
import './MainMap.scss';
import { connect } from 'react-redux';
import { mapInitial } from '../../../../config/leaflet.config'
import L from 'leaflet';
import Constants from '../../../../lib/constants';
import { Map, TileLayer, Polygon, Marker, Popup, LayerGroup, LayersControl } from 'react-leaflet'
import { token } from '../../../../config/leaflet.config'
import IconCreator from '../../../Helpers/IconCreator/IconCreator'
import ZoneCreator from '../../../Helpers/ZoneCreator/ZoneCreator'

const { BaseLayer, Overlay } = LayersControl


class MainMap extends Component {
    state = {}


    componentDidMount() {
        const leafletMap = this.leafletMap.leafletElement;
        console.log(leafletMap)
        leafletMap.on('click', (e) => {
            console.log('Current position -> ', e.latlng);
        });
        this.props.setMap(leafletMap)
    }

    render() {
        const position = [51.505, -0.09]

        let carsIcons = null;
        if (this.props.carsList.length > 0) {
            const visibleCars = this.props.carsList.filter((item, i) => {
                return item.isVisible === true
            })
            carsIcons = visibleCars.map((item, i) => {
                return <IconCreator key={item.name} index={i} car={item} />
            })
        }
        let zones = null;
        if(this.props.zonesList.length > 0) {
            const visibleZones = this.props.zonesList.filter((item, i) => {
                return item.isVisible === true
            })
            // zones = visibleZones.map((item, i) => {
            //     console.log(item)
            //     return <Polygon color={item.color} positions={item.coords} />
            // })
            zones = <ZoneCreator items={visibleZones} />
        }

        return (
                <Map 
                    ref={m => { this.leafletMap = m; }}
                    className='MainMap' 
                    center={position} 
                    zoom={12}
                    >
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
                        {zones}
                        {/* <Polygon color="purple" positions={[[51.515, -0.09], [51.52, -0.1], [51.52, -0.12]]} /> */}
                    </LayersControl>
                </Map>
        )
    }
}


const mapStateToProps = state => {
    return {
        carsList: state.allCars.cars,
        currentMap: state.mainMap.map,
        zonesList: state.allZones.zones
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setMap: (elem) => { dispatch({ type: Constants.ActionTypes.SET_MAP, elem: elem }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainMap);