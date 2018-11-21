import React, { Component } from 'react';
import './NavBar_LeftSide.scss';

class NavBar_LeftSide extends Component {
    state = {

    }

    render() {
        return (
            <div className='NavBar__left'>
                <div className="NavBar__left">
                    <ul className="nav nav-pills" id="MainNavs__mainTabs" role="tablist">
                        <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="About">
                            <a className="nav-link active" id="MainNavs__about" data-toggle="tab" href="#MainNavs__about" aria-controls="home" aria-selected="true"></a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Help">
                            <a className="nav-link" id="MainNavs__help" data-toggle="tab" href="#MainNavs__help" aria-controls="profile" aria-selected="false"></a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Settings">
                            <a className="nav-link" id="MainNavs__settings" data-toggle="tab" href="#MainNavs__settings" aria-controls="contact" aria-selected="false"></a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Show point">
                            <a className="nav-link" id="MainNavs__showPoint" data-toggle="tab" href="#MainNavs__showPoint" aria-controls="contact" aria-selected="false"></a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Address search">
                            <a className="nav-link" id="MainNavs__adressSearch" data-toggle="tab" href="#MainNavs__adressSearch" aria-controls="contact" aria-selected="false"></a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Reports">
                            <a className="nav-link" id="MainNavs__reports" data-toggle="tab" href="#MainNavs__reports" aria-controls="contact" aria-selected="false"></a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Tasks">
                            <a className="nav-link" id="MainNavs__tasks" data-toggle="tab" href="#MainNavs__tasks" aria-controls="contact" aria-selected="false"></a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="RFID and iButton logbook">
                            <a className="nav-link" id="MainNavs__RFID" data-toggle="tab" href="#MainNavs__RFID" aria-controls="contact" aria-selected="false"></a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="DTC (Diagnostic Trouble Codes)">
                            <a className="nav-link" id="MainNavs__DTC" data-toggle="tab" href="#MainNavs__DTC" aria-controls="contact" aria-selected="false"></a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Object control">
                            <a className="nav-link" id="MainNavs__objectControl" data-toggle="tab" href="#MainNavs__objectControl" aria-controls="contact" aria-selected="false"></a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Image gallery">
                            <a className="nav-link" id="MainNavs__imageGallery" data-toggle="tab" href="#MainNavs__imageGallery" aria-controls="contact" aria-selected="false"></a>
                        </li>
                        <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Chat">
                            <a className="nav-link" id="MainNavs__chat" data-toggle="tab" href="#MainNavs__chat" aria-controls="contact" aria-selected="false"></a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar_LeftSide