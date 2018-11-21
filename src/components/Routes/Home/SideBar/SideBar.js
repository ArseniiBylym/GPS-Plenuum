import React, { Component } from 'react';
import './SideBar.scss';
import SideBar_Objects_Top from './Objects/SideBar_Objects_Top/SideBar_Objects_Top';
import SideBar_Objects_Bottom from './Objects/SideBar_Objects_Bottom/SideBar_Objects_Bottom'
import SideBar_Events_Top from './Events/SideBar_Events_Top/SideBar_Events_Top'
import SideBar_Events_Bottom from './Events/SideBar_Events_Bottom/SideBar_Events_Bottom'
import SideBar_Places from './Places/SideBar_Places'
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
                    <ul className="nav nav-tabs" id="SideBar__mainTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="SideBar__objects-tab" data-toggle="tab" href="#SideBar__objects" role="tab" aria-controls="SideBar__objects" aria-selected="true">Objects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="SideBar__events-tab" data-toggle="tab" href="#SideBar__events" role="tab" aria-controls="SideBar__events" aria-selected="false">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="SideBar__places-tab" data-toggle="tab" href="#SideBar__places" role="tab" aria-controls="SideBar__places" aria-selected="false">Places</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="SideBar__history-tab" data-toggle="tab" href="#SideBar__history" role="tab" aria-controls="SideBar__history" aria-selected="false">History</a>
                        </li>
                    </ul>
                    <div className="tab-content SideBar__content" id="SideBar__mainTabContent">
                        <div className="tab-pane show active SideBar__content-objects" id="SideBar__objects" role="tabpanel" aria-labelledby="SideBar__objects-tab">
                            <SideBar_Objects_Top currentCarHandler={this.currentCarHandler} />
                            <SideBar_Objects_Bottom currentCar={this.state.currentCar} />
                        </div>
                        <div className="tab-pane " id="SideBar__events" role="tabpanel" aria-labelledby="SideBar__events-tab">
                            <SideBar_Events_Top currentEventHandler={this.currentEventHandler}/>
                            <SideBar_Events_Bottom currentEvent={this.state.currentEvent}/>
                        </div>
                        <div className="tab-pane " id="SideBar__places" role="tabpanel" aria-labelledby="SideBar__places-tab">
                            <SideBar_Places />
                        </div>
                        <div className="tab-pane " id="SideBar__history" role="tabpanel" aria-labelledby="SideBar__history-tab">history</div>
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