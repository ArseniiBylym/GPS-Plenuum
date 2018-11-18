import React, { Component } from 'react';
import './NavBar.scss';
import {Button} from 'reactstrap';
import {connect} from 'react-redux';
import Constants from '../../../../lib/constants'

class NavBar extends Component {
    state = {

    }

    render() {
        return (
            <div className='NavBar'>
                {/* <div className='logOut' onClick={this.props.logOut}> */}
                    <Button color='secondary' className='logOut' onClick={this.props.logOut}>Log out</Button>
                {/* </div> */}
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
        
        export default connect(mapStateToProps, mapDispatchToProps)(NavBar)