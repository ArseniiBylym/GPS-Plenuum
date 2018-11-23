import React, { Component } from 'react';
import './History.scss';
import History_Header from './History_Header/History_Header'
import History_Top from './History_Top/History_Top'
import History_Bottom from './History_Bottom/History_Bottom'

class History extends Component {
    state = {
        
    }

    render() {
        return(
            <div className='History_Tab'>
                <History_Header />
                <History_Top />
                <History_Bottom />
            </div>
        )
    }
}

export default History