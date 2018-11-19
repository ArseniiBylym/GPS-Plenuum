import React, {Component} from 'react';
import './SideBar.scss';
import SideBar_Top from './SideBar_Top/SideBar_Top';
import SideBar_Bottom from './SideBar_Bottom/SideBar_Bottom'
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
        this.setState({currentCar: this.props.carsList[index]})
    }

    changeLabeHandler = (e) => {
        console.log(e);
        console.log(e.target)
        console.log(e.target.name)
        this.setState({activeLabel: e.target.name})
    }

    render() {
        return(
            <div className='SideBar'>
                <div className="labels">
                    <div name='objects' className='labels_item' onClick={this.changeLabeHandler}>Objects</div>
                    <div name='events' className='labels_item' onClick={this.changeLabeHandler}>Events</div>
                    <div name='places' className='labels_item' onClick={this.changeLabeHandler}>Places</div>
                    <div name='history' className='labels_item' onClick={this.changeLabeHandler}>History</div>
                </div>
                <SideBar_Top currentCarHandler={this.currentCarHandler}/>
                <SideBar_Bottom currentCar={this.state.currentCar}/>
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