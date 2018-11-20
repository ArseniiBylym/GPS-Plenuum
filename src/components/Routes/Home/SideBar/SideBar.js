import React, { Component } from 'react';
import './SideBar.scss';
import SideBar_Objects_Top from './Objects/SideBar_Objects_Top/SideBar_Objects_Top';
import SideBar_Objects_Bottom from './Objects/SideBar_Objects_Bottom/SideBar_Objects_Bottom'
import { connect } from 'react-redux'

class SideBar extends Component {
    state = {
        activeLabel: 'objects',
        currentCar: null
    }

    componentDidMount = () => {
        console.log(this.state.activeLabel)
    }

    currentCarHandler = (index) => {
        this.setState({ currentCar: this.props.carsList[index] })
    }

    changeLabeHandler = (e) => {
        console.log(e);
        console.log(e.target)
        console.log(e.target.name)
        this.setState({ activeLabel: e.target.name })
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
                        <div className="tab-pane " id="events" role="tabpanel" aria-labelledby="profile-tab">Profile</div>
                        <div className="tab-pane " id="contacts" role="tabpanel" aria-labelledby="contact-tab">contact</div>
                        <div className="tab-pane " id="history" role="tabpanel" aria-labelledby="contact-tab">contact</div>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        carsList: state.allCars.cars
    }
}

export default connect(mapStateToProps, null)(SideBar);