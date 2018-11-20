import React, { Component } from 'react';
import './SideBar.scss';
import SideBar_Objects_Top from './Objects/SideBar_Objects_Top/SideBar_Objects_Top';
import SideBar_Objects_Bottom from './Objects/SideBar_Objects_Bottom/SideBar_Objects_Bottom'
import SideBar_Events_Top from './Events/SideBar_Events_Top/SideBar_Events_Top'
import SideBar_Events_Bottom from './Events/SideBar_Events_Bottom/SideBar_Events_Bottom'
import { connect } from 'react-redux'

class SideBar extends Component {
    state = {
        currentCar: null,
        currentEvent: null
    }

    currentCarHandler = (index) => {
        this.setState({ currentCar: this.props.carsList[index] })
    }

    currentEventHandler = (index) => {
        this.setState({currentEvent: this.props.eventsList[index]})
    }

    render() {
        return (
            <div className='SideBar'>
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#objects" role="tab" aria-controls="home" aria-selected="true">Objects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#events" role="tab" aria-controls="profile" aria-selected="false">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#places" role="tab" aria-controls="contact" aria-selected="false">Places</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#history" role="tab" aria-controls="contact" aria-selected="false">History</a>
                        </li>
                    </ul>
                    <div className="tab-content SideBar__content" id="myTabContent">
                        <div className="tab-pane show active SideBar__content-objects" id="objects" role="tabpanel" aria-labelledby="home-tab">
                            <SideBar_Objects_Top currentCarHandler={this.currentCarHandler} />
                            <SideBar_Objects_Bottom currentCar={this.state.currentCar} />
                        </div>
                        <div className="tab-pane " id="events" role="tabpanel" aria-labelledby="profile-tab">
                            <SideBar_Events_Top currentEventHandler={this.currentEventHandler}/>
                            <SideBar_Events_Bottom currentEvent={this.state.currentEvent}/>
                        </div>
                        <div className="tab-pane " id="contacts" role="tabpanel" aria-labelledby="contact-tab">contact</div>
                        <div className="tab-pane " id="history" role="tabpanel" aria-labelledby="contact-tab">history</div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        carsList: state.allCars.cars,
        eventsList: state.allEvents.events
    }
}

export default connect(mapStateToProps, null)(SideBar);