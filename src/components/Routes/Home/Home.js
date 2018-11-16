import React, { Component } from 'react';
import './Home.scss';
import {Button} from 'reactstrap';
import {connect} from 'react-redux';
import Constants from '../../../lib/constants'
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar/NavBar'

class Home extends Component {
    state = {
        
    }

    render() {
        let token = window.localStorage.getItem('token')
        if(!token) return <Redirect to={'/login'} />
        return(
            <div className='Home'>
            <NavBar />
                Home Page
               
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
        logOut: () => {dispatch({type: Constants.ActionTypes.LOGOUT_SUCCESS})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
