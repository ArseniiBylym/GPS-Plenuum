import React, { Component } from 'react';
import './SideBar_Events_Bottom.scss';
import { Table } from 'reactstrap'
import DetailsList from '../../Objects/SideBar_Objects_Bottom/DetailsList/DetailsList'

class SideBar_Events_Bottom extends Component {
    state = {
        
    }

    render() {
        console.log(this.props.currentEvent)
        return(
            <div className='SideBar_Events_Bottom'>
                 <Table bordered hover >
                    <thead>
                        <tr>
                            <th style={{width: '40%'}}>Data</th>
                            <th style={{width: '60%'}}>Value</th>
                        </tr>
                    </thead>
                    {this.props.currentEvent && <DetailsList details={this.props.currentEvent.details}/>}
                </Table>
            </div>
        )
    }
}

export default SideBar_Events_Bottom