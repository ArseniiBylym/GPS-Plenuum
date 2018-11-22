import React, { Component } from 'react';
import './Zones_Table.scss';
import { connect } from 'react-redux'
import Constants from '../../../../../../../lib/constants'
import Zones_Table_Item from './Zones_Table_Item'

class Zones_Table extends Component {

    render() {

        const zonesItems = this.props.zones.map((item, i) => {
            return <Zones_Table_Item key={item._id} zone={item} index={i} isVisible={item.isVisible}/>
        })

        return(
            <React.Fragment>
                {zonesItems}
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        zones: state.allZones.zones
    }
}


export default connect(mapStateToProps, null)(Zones_Table)