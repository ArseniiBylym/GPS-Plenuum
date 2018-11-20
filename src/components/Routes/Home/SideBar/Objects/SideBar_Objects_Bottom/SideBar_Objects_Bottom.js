import React, { Component } from 'react';
import './SideBar_Objects_Bottom.scss';
import { Table } from 'reactstrap'
import DetailsList from './DetailsList/DetailsList';

class SideBar_Objects_Bottom extends Component {
    state = {
        
    }

    render() {
        console.log(this.props)
        return(
            <div className='SideBar_Objects_Bottom'>
                <Table bordered hover >
                    <thead>
                        <tr>
                            <th style={{width: '40%'}}>Data</th>
                            <th style={{width: '60%'}}>Value</th>
                        </tr>
                    </thead>
                    {this.props.currentCar && <DetailsList details={this.props.currentCar.details}/>}
                </Table>
            </div>
        )
    }
}

export default SideBar_Objects_Bottom