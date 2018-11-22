import React, { Component } from 'react';
import './EventItem.scss';
import moment from 'moment'
import { connect } from 'react-redux'
import L from 'leaflet';
import {Popup} from 'react-leaflet'
import {createEventPopup} from '../../../../../../../lib/functions'

class EventItem extends Component {
    state = {
        
    }
    selectCurrentEvent = () => {
        this.props.selectEvent(this.props.index)
        this.props.map.setView(this.props.event.details.Position, 12);

        createEventPopup(this.props.event, this.props.map)
    }

    render() {
        console.log('----------------', this.props)
        const {time, object, type} = this.props.event;
        return(
            <tr className='EventItem' onClick={this.selectCurrentEvent}>
                <td>{moment(time).format('DD:MM:YYYY')}</td>
                <td>{object}</td>
                <td>{type}</td>
            </tr>
        )
    }
}

const mapStateToProps = state => {
    return {
        map: state.mainMap.map
    }
}

export default connect(mapStateToProps, null)(EventItem)