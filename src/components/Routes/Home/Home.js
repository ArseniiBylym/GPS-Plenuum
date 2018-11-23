import React, { Component } from 'react';
import './Home.scss';

import NavBar from './NavBar/NavBar'
import SideBar from './SideBar/SideBar';
import MainMap from './MainMap/MainMap';

import Windows from './Windows/Windows'


class Home extends Component {
    state = {}

    render() {
        return(
            <div className='Home'>
                    <div className='home__header'>
                        <NavBar />
                    </div>
                    <div className='home__sidebar'>
                        <SideBar />
                    </div>
                    <div className='home__map'>
                        <MainMap />
                    </div>
                    <Windows />
            </div>
        )
    }
}
export default Home;

