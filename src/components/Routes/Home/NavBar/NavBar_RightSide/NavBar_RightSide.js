import React, { Component } from 'react';
import './NavBar_RightSide.scss';
import { Button, Input } from 'reactstrap';
import BillingButton from './BillingButton/BillingButton'
import UserProfileButton from './UserProfileButton/UserProfileButton'

class NavBar_RightSide extends Component {
    state = {

    }

    render() {
        return (
            <div className='NavBar__right'>
                <Input type="select" name="select" id="exampleSelect">
                    <option>English</option>
                    <option>Arabic</option>
                    <option>Ukrain</option>
                </Input>
                <BillingButton />
                <UserProfileButton />
                <Button color='secondary' className='logOut' data-toggle="tooltip" data-placement="bottom" title="Log out" onClick={this.props.logOut}></Button>
            </div>
        )
    }
}

export default NavBar_RightSide