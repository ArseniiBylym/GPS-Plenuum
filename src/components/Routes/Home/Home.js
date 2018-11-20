import React, { Component } from 'react';
import './Home.scss';
import { Redirect } from 'react-router-dom';
import NavBar from './NavBar/NavBar'
import SideBar from './SideBar/SideBar';
import MainMap from './MainMap/MainMap';
import { connect } from 'react-redux';


class Home extends Component {
    state = {
        
    }

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
            </div>
        )
    }
}

// const mapStateToProps = state => {
//     return {
//         authState: state.isAuth.isAuthenticated
//     }
// }


// export default connect(mapStateToProps, null)(Home);
export default Home;

