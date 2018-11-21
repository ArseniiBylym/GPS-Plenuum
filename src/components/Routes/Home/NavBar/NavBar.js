import React, { Component } from 'react';
import './NavBar.scss';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import Constants from '../../../../lib/constants'

class NavBar extends Component {
    state = {

    }
    componentDidMount = () => {
        console.log(this.context)
    }

    render() {
        return (
            <div className='NavBar'>
                {/* <div className="NavBar__left">
                <ul className="nav nav-tabs" id="MainNavs__mainTabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#MainNavs__about" role="tab" aria-controls="home" aria-selected="true">Objects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#MainNavs__help" role="tab" aria-controls="profile" aria-selected="false">Events</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#MainNavs__settings" role="tab" aria-controls="contact" aria-selected="false">Places</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="history-tab" data-toggle="tab" href="#MainNavs__showPoint" role="tab" aria-controls="contact" aria-selected="false">History</a>
                        </li>
                    </ul>
                </div>
                <div className="NavBar__right"></div> */}
                <Button color='secondary' className='logOut' onClick={this.props.logOut}>Log out</Button>
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