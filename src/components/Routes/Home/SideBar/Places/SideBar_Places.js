import React, { Component } from 'react';
import './SideBar_Places.scss';
import Places_Header from './Places_Header/Places_Header'
import { Table } from 'reactstrap';
import Markers_Table from './Places_Tables/Markers_Table'
import Routes_Table from './Places_Tables/Routes_Table'
import Zones_Table from './Places_Tables/Zones_Table/Zones_Table'

class SideBar_Places extends Component {
    state = {
        currentTab: 'markers'
    }

    changeTabHandler = e => {
        let name = e.target.dataset.name;
        this.setState({
            currentTab: name
        })
    }
    componentDidUpdate = () => {
        console.log(this.state.currentTab)
    }

    inputSearchHandler = e => {

    }

    render() {
        return (
            <div className='SideBar_Places'>
                <ul className="nav nav-tabs" id="SideBar_Places__mainTab" role="tablist">
                    <li className="nav-item" onClick={this.changeTabHandler}>
                        <a className="nav-link active" data-name='markers' id="SideBar_Places__markers-tab" data-toggle="tab" href="#SideBar_Places__markers" role="tab" aria-controls="SideBar_Places__markers" aria-selected="true">Markers(0)</a>
                    </li>
                    <li className="nav-item" onClick={this.changeTabHandler}>
                        <a className="nav-link" data-name='routes' id="SideBar_Places__routes-tab" data-toggle="tab" href="#SideBar_Places__routes" role="tab" aria-controls="SideBar_Places__routes" aria-selected="false">Routes(0)</a>
                    </li>
                    <li className="nav-item" onClick={this.changeTabHandler}>
                        <a className="nav-link" data-name='zones' id="SideBar_Places__zones-tab" data-toggle="tab" href="#SideBar_Places__zones" role="tab" aria-controls="SideBar_Places__zones" aria-selected="false">Zones(5)</a>
                    </li>
                </ul>
                <Places_Header searchHandler={this.inputSearchHandler} currentTab={this.state.currentTab} />
                <div className="SideBar_Places-table">
                    <Table bordered hover >
                        <thead>
                            <tr>
                                <th className='SideBar_Places-table__visible' style={{ width: '10%' }}></th>
                                <th style={{ width: '10%' }}></th>
                                <th style={{ width: '70%' }}>Name</th>
                                <th style={{ width: '10%' }}></th>
                            </tr>
                        </thead>
                        <tbody className="tab-content SideBar_Places-table-content" id="SideBar_Places-table-content">
                            {this.state.currentTab === 'markers' ? <Markers_Table /> :
                                this.state.currentTab === 'routes' ? <Routes_Table /> :
                                this.state.currentTab === 'zones' ? <Zones_Table /> : null
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default SideBar_Places