import React, { Component } from 'react';
import './SideBar_Events_Top.scss';
import { Table } from 'reactstrap';
import { connect } from 'react-redux'
import EventItem from './EventItem/EventItem'

class SideBar_Events_Top extends Component {
    state = {
        
    }

    render() {

        let events = null
        console.log(this.props.eventsList.length)
        if(this.props.eventsList.length > 0) {
            events = this.props.eventsList.map((item, i) => {
                console.log(item.isVisible)
                return <EventItem key={item._id} event={item} index={i} selectEvent={this.props.currentEventHandler}/>
            })
        }

        return(
            <div className='SideBar_Events_Top'>
                <Table bordered hover >
                    <thead>
                        <tr>
                            <th style={{width: '20%'}}>Time</th>
                            <th style={{width: '20%'}}>Object</th>
                            <th style={{width: '60%'}}>Event</th>
                        </tr>
                    </thead>
                    <tbody>{events}</tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        eventsList: state.allEvents.events
    }
}

export default connect(mapStateToProps, null)(SideBar_Events_Top)