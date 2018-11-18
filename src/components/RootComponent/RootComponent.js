import React, { Component } from 'react';
import './RootComponent.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"

import Login from '../Routes/Login/Login';
import Home from '../Routes/Home/Home'
import { connect } from 'react-redux';
import Constants from './../../lib/constants';

class RootComponent extends Component {
    state = {
        
    }

    componentDidMount = () => {
        if(window.localStorage.getItem('token')) {
            this.props.logIn()
        }
    }

    render() {

        const token = window.localStorage.getItem('token')
        const {authState} = this.props
        const isLogin = !!token || !!authState;
        return(
            <div className='RootComponent'>
                <Router>
                    <div>
                        {!isLogin && (
                            <Switch>
                                <Route path='/login' exact component={Login} />
                                <Redirect from='/' to='/login' />
                            </Switch>
                        )}
                         {isLogin && (
                            <Switch>
                                <Route path='/home' exact component={Home} />
                                <Redirect from='/' to='/home' />
                            </Switch>
                        )}
                    </div>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        authState: state.isAuth.isAuthenticated
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logIn: () => { dispatch({ type: Constants.ActionTypes.LOGIN_SUCCESS }) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent)