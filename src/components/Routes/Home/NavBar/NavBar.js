import React, { Component } from 'react';
import './NavBar.scss';

import { connect } from 'react-redux';
import Constants from '../../../../lib/constants'
import NavBar_LeftSide from './NavBar_LeftSide/NavBar_LeftSide'
import NavBar_RightSide from './NavBar_RightSide/NavBar_RightSide'


class NavBar extends Component {
    state = {

    }

    render() {
        return (
            <div className='NavBar'>
                <NavBar_LeftSide />
                <NavBar_RightSide logOut={this.props.logOut}/>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        authState: state.isAuth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        logOut: () => { dispatch({ type: Constants.ActionTypes.LOGOUT_SUCCESS }) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)