import React, { Component } from 'react';
import './Zones_Table.scss';
import { connect } from 'react-redux'

class Zones_Table extends Component {

    render() {

        const zonesItems = this.props.zones.map((item, i) => {
            return (
                <tr key={item._id} className='Zone_table__item'>
                    <td><input type='checkbox' checked={item.isVisible}></input></td>
                    <td className='Zone_table__item--color'>
                        <div className="Zone_table__item--marker" style={{backgroundColor: item.fillColor}}></div>
                    </td>
                    <td>{item.name}</td>
                    <td>
                        <div className="Zone_table__item--edit"></div>
                        <div className="Zone_table__item--delete"></div>
                    </td>
                </tr>
            )
        })
        console.log(this.props.zones)
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