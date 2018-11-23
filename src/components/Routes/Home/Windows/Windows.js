import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { withCloseHandler } from '../../../Helpers/HOC'

import About from './About/About'
import Help from './Help/Help'
import Settings from './Settings/Settings'
import _Point from './Point/Point'
import Search from './Search/Search'
import Reports from './Reports/Reports'
import Tasks from './Tasks/Tasks'
import RFID from './RFID/RFID'
import DTC from './DTC/DTC'
import _Object from './Object/Object'
import Gallery from './Gallery/Gallery'
import Chart from './Chart/Chart'
import Constants from '../../../../lib/constants';

class Windows extends Component {
    state = {
        
    }

    windowsObject = {
        about: About,
        help: Help,
        settings: Settings,
        points: _Point,
        search: Search,
        reports: Reports,
        tasks: Tasks,
        rfid: RFID,
        dtc: DTC,
        object: _Object,
        gallery: Gallery,
        chart: Chart  
    }

    render() {
        const windowsList = [];

        if(this.props.windows.about) {
            for(let item in this.props.windows) {
                console.log('case 1')
                if(this.props.windows[item].value === true) {
                    console.log('case 2')
                    windowsList.push(this.windowsObject[item])
                    let component = withCloseHandler(this.windowsObject[item], {name: item, click: this.props.closeModal})
                    windowsList.push(component)
                }
            }
        }
        return(
            <Fragment>
                {windowsList}
            </Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        windows: state.allWindows
    }
}

const mapDispatchToProps = dispatch => {
    return {
        closeModal: (name) => {dispatch({type: Constants.ActionTypes.CLOSE_WINDOW, name: name})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Windows)