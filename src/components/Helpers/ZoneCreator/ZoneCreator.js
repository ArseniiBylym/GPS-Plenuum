import React, {Fragment}from 'react';
import './ZoneCreator.scss';
import { Polygon} from 'react-leaflet';

function ZoneCreator(props) {

        const zones = props.items.map((zone, i) => {
            return (
                <Polygon
                    color={zone.color}
                    positions={zone.coords}
                />
            )
        })

        return(
            <Fragment>
                {zones}
            </Fragment>
        )
}

export default ZoneCreator