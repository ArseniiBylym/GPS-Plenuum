import React, { Component } from 'react';
import './NavBar_LeftSide.scss';
import { connect } from 'react-redux';
import Constants from '../../../../../lib/constants'

class NavBar_LeftSide extends Component {
    state = {

    }
    links = [
        {title: 'About', id: 'MainNavs__about', nameForHandler: 'about'},
        {title: 'Help',  id: 'MainNavs__help',  nameForHandler: 'help'},
        {title: 'Settings', id: 'MainNavs__settings', nameForHandler: 'settings'},
        {title: 'Show point', id: 'MainNavs__showPoint', nameForHandler: 'points'},
        {title: 'Address search', id: 'MainNavs__adressSearch', nameForHandler: 'search'},
        {title: 'Reports', id: 'MainNavs__reports', nameForHandler: 'reports'},
        {title: 'Tasks', id: 'MainNavs__tasks', nameForHandler: 'tasks'},
        {title: 'RFID and iButton logbook', id: 'MainNavs__RFID', nameForHandler: 'rfid'},
        {title: 'DTC (Diagnostic Trouble Codes)', id: 'MainNavs__DTC', nameForHandler: 'dtc'},
        {title: 'Object control', id: 'MainNavs__objectControl', nameForHandler: 'object'},
        {title: 'Image gallery', id: 'MainNavs__imageGallery', nameForHandler: 'gallery'},
        {title: 'Chart', id: 'MainNavs__chart', nameForHandler: 'chart'},
       
    ]

    render() {

        const linkList = this.links.map((item, i) => (
            <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title={item.title} onClick={this.props.openWindow.bind(this, item.nameForHandler)}>
                <a className="nav-link active" id={item.id} data-toggle="tab" href={`#${item.href}`} ></a>
            </li>
        ))
        return (
            <div className='NavBar__left'>
                <div className="NavBar__left">
                    <ul className="nav nav-pills" id="MainNavs__mainTabs" role="tablist">
                        {linkList}
                        
                    </ul>
                </div>
            </div>
        )
    }
}

const mapDispatchToPops = dispatch => {
    return {
        openWindow: (name) => {dispatch({type: Constants.ActionTypes.OPEN_WINDOW, name: name})}
    }
}

export default connect(null, mapDispatchToPops)(NavBar_LeftSide)