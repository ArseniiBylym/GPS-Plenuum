import React, { Component, Fragment } from 'react';
import './CarItem.scss';
import { connect } from 'react-redux'
import Constants from '../../../../../../../lib/constants'

class CarItem extends Component {
    state = {
        
    }

    selectCurrentCar = () => {
        const map = this.props.mainMap;
        map.setView({lat: this.props.car.details.Position.lat, lng: this.props.car.details.Position.lng}, 12)
        this.props.selectCar(this.props.index)
    }

    carVisibilityHandler = () => {
        if(this.props.car.isVisible) {
            this.props.hideCar(this.props.index)
        } else {
            this.props.showCar(this.props.index)
        }
    }
   

    render() {
        const {name, icon_url, date, speed, engineState, connectionState} = this.props.car
        return(
                <tr className='CarItem' >
                    <td><input type='checkbox' checked={this.props.isVisible} onChange={this.carVisibilityHandler}></input></td>
                    <td><input type='checkbox'></input></td>
                    <td onClick={this.selectCurrentCar}><img src={icon_url} ></img></td>
                    <td>
                        <div className='info-container'>
                            <div className="info-container-item info-container--name" onClick={this.selectCurrentCar}>{name}</div>
                            <div className="info-container-item info-container--speed">{speed}kph</div>
                            <div className={engineState ? "info-container-item info-container--engine" : "info-container-item info-container--engine off"}></div>
                            <div className={connectionState ? "info-container-item info-container--connection" : "info-container-item info-container--connection off"}></div>
                            <div className="info-container-item info-container--action-link"><img src="https://s1.gps-server.net/theme/images/menu.svg"/></div>
                        </div>
                    </td>
                </tr>
        )
    }
}


const mapStateToProps = state => {
    return {
        mainMap: state.mainMap.map
    }
}

const mapDispatchToProps = dispatch => {
    return {
        hideCar: (index) => {dispatch({type: Constants.ActionTypes.CAR_HIDE, index: index})},
        showCar: (index) => {dispatch({type: Constants.ActionTypes.CAR_SHOW, index: index})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarItem)