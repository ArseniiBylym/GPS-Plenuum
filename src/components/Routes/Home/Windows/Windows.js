import React, { Component, Fragment } from 'react';
import './Windows.scss';
import { connect } from 'react-redux';

// import { withCloseHandler } from '../../../Helpers/HOC'

import About from './About/About'
import Help from './Help/Help'
import Settings from './Settings/Settings'
import Point from './Point/Point'
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

    closeCurrentWindow = (name) => {
       this.props.closeModal(name)
    }

    windowsObject = {
        about: <About name='about' click={this.closeCurrentWindow}/>,
        help: <Help name='help' click={this.closeCurrentWindow}/>,
        settings: <Settings name='settings' click={this.closeCurrentWindow}/>,
        points: <Point name='points' click={this.closeCurrentWindow}/>,
        search: <Search name='search' click={this.closeCurrentWindow}/>,
        reports: <Reports name='reports' click={this.closeCurrentWindow}/>,
        tasks: <Tasks name='tasks' click={this.closeCurrentWindow}/>,
        rfid: <RFID name='rfid' click={this.closeCurrentWindow}/>,
        dtc: <DTC name='dtc' click={this.closeCurrentWindow}/>,
        object: <_Object name='object' click={this.closeCurrentWindow}/>,
        gallery: <Gallery name='gallery' click={this.closeCurrentWindow}/>,
        chart: <Chart name='chart' click={this.closeCurrentWindow}/>

        // about: About,
        // help: Help,
        // settings: Settings,
        // points: _Point,
        // search: Search,
        // reports: Reports,
        // tasks: Tasks,
        // rfid: RFID,
        // dtc: DTC,
        // object: _Object,
        // gallery: Gallery,
        // chart: Chart
    }

    propsList = {
        closeHandler: this.closeCurrentWindow
    }

    render() {

        const windowsList = [];

        if(this.props.windows.about) {
            for(let item in this.props.windows) {
                if(this.props.windows[item].value === true) {
                    windowsList.push(this.windowsObject[item])
                    // windowsList.push(withCloseHandler(this.windowsObject[item], {...this.propsList}))
                }
            }
        }
        return(
            // <div className='Windows'>
            <Fragment>
                {windowsList}
            </Fragment>
            // </div>
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