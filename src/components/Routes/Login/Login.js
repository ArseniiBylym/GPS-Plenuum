import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './Login.scss';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import Constants from '../../../lib/constants';

class Login extends Component {
    state = {
        user: {
            name: '',
            password: '',

        },
        lang: [
            { value: 0, name: 'English' },
            { value: 1, name: 'Ukrainian' },
            { value: 2, name: 'Poland' }
        ]

    }

    inputChangeHandler = e => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            {
                ...this.state,
                user: {
                    ...this.state.user,
                    [name]: value,
                }
            }
        )
    }

    loginHandler = e => {
        e.preventDefault();
        console.log(this.state.user);
        this.props.logIn()
    }

    render() {
        const selectOptions = this.state.lang.map((item, i) => {
            return <option key={item.value}>{item.name}</option>

        })
        // let token = window.localStorage.getItem('token');
        // let { from } = this.props.location.state || { from: { pathname: "/" } };

        // if (token) return <Redirect to={from} />
        return (
            <div className='Login'>
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className="col-10 col-md-8 col-lg-6 form-wrapper">
                            <div className='header'>
                            </div>
                            <div className="main-container">
                                <form>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">@</div>
                                            </div>
                                            <input name='name' type="text"
                                                className="form-control" id="loginFormName"
                                                placeholder="Username"
                                                onChange={this.inputChangeHandler}
                                                value={this.state.user.name}
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">#</div>
                                            </div>
                                            <input name='password' type="text"
                                                className="form-control" id="loginFormPassword"
                                                placeholder="Password"
                                                onChange={this.inputChangeHandler}
                                                value={this.state.user.password}
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="form-group"></div>
                                    <button className='btn btn-primary btn-block' onClick={this.loginHandler}>Login</button>
                                    <div className="helper-links">
                                        <NavLink to='/recover'>Recover password</NavLink>
                                        <span> or </span>
                                        <NavLink to='/create'>create account</NavLink>
                                    </div>
                                </form>
                            </div>
                            <div className="footer">
                                <select className="form-control" id="loginLanguageSelect">
                                    {selectOptions}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
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
        logIn: () => { dispatch({ type: Constants.ActionTypes.LOGIN_SUCCESS }) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)