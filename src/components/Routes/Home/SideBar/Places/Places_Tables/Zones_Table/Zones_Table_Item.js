import React, { Component } from 'react';
import { connect } from 'react-redux'
import Constants from '../../../../../../../lib/constants'
import {findZoneCenter} from '../../../../../../../lib/functions'

class Zones_Table_item extends Component {
    state = {
        
    }

    visibilityHandler = () => {
        const checked = this.props.isVisible
        if(checked) this.props.hideZone(this.props.index)
        else this.props.showZone(this.props.index)
    }

    showInCenter = () => {
        const center = findZoneCenter(this.props.zone.coords)
        console.log(center)
        this.props.map.setView(center, 12)
    }

    render() {
        return(
            <tr className='Zone_table__item'>
                <td><input type='checkbox' checked={this.props.isVisible} onChange={this.visibilityHandler}></input></td>
                <td className='Zone_table__item--color' >
                        <div className="Zone_table__item--marker" style={{backgroundColor: this.props.zone.color}}></div>
                </td>
                <td onClick={this.showInCenter}>{this.props.zone.name}</td>
                <td className='Zone_table__item--options'>
                    <div className="Zone_table__item--edit" data-toggle="tooltip" data-placement="bottom" title="Edit"></div>
                    <div className="Zone_table__item--delete" data-toggle="tooltip" data-placement="bottom" title="Delete"></div>
                </td>
            </tr>
        )
    }
}

const mapStateToProps = state => {
    return {
        map: state.mainMap.map
    }
} 

const mapDispatchToProps = dispatch => {
    return {
        hideZone: (index) => {dispatch({type: Constants.ActionTypes.ZONE_HIDE, index: index})},
        showZone: (index) => {dispatch({type: Constants.ActionTypes.ZONE_SHOW, index: index})}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Zones_Table_item)