import React, { Component } from 'react';
import './RootComponent.scss';
import { BrowserRouter as Router, Route } from "react-router-dom"

import Login from '../Routes/Login/Login';
import Home from '../Routes/Home/Home'
import PrivateRout from '../Helpers/PrivateRoute'
import {Button} from 'reactstrap';
import {connect} from 'react-redux';
import Constants from '../../lib/constants'

class RootComponent extends Component {
    state = {
        
    }

    // loginHandler = e => {
    //     this.props.logIn();
    // }
    // logoutHandler = e => {
    //     this.props.logOut();
    // }

    render() {
        return(
            <div className='RootComponent'>
                {/* <div className='testingButtons'>
                    <Button color='primary' onClick={this.loginHandler}>Log in</Button>
                    <Button color='disabled' onClick={this.logoutHandler}>Log out</Button>
                </div> */}
                <Router>
                    <div>
                        <Route path='/login' exact component={Login} />
                        <Route path='/' component={Home} />
                        {/* <PrivateRout path='/' component={Home} /> */}
                    </div>
                </Router>
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
        logIn: () => {dispatch({type: Constants.ActionTypes.LOGIN_SUCCESS})},
        logOut: () => {dispatch({type: Constants.ActionTypes.LOGOUT_SUCCESS})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent)