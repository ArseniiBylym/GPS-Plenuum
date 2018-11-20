import React, { Component } from 'react';
import './EventItem.scss';
import moment from 'moment'

class EventItem extends Component {
    state = {
        
    }

    selectCurrentEvent = () => {
        this.props.selectEvent(this.props.index)
    }

    render() {
        console.log(this.props)
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

export default EventItem