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
                <nav className="navbar navbar-dark bg-primary" >
                    <Button color='disabled' onClick={this.props.logOut}>Log out</Button>
                </nav>   
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