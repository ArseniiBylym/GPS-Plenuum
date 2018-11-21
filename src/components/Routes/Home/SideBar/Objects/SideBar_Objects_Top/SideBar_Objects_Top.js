import React, { Component } from 'react';
import './SideBar_Objects_Top.scss';
import { Table } from 'reactstrap';
import { connect } from 'react-redux'
import CarItem from './CarItem/CarItem'

class SideBar_Top extends Component {
    state = {
        
    }
    componentDidMount = () => {
    }

    render() {

        let cars = null
        console.log(this.props.carsList.length)
        if(this.props.carsList.length > 0) {
            cars = this.props.carsList.map((item, i) => {
                console.log(item.isVisible)
                return <CarItem key={item.details['Engine ID']} isVisible={item.isVisible} car={item} index={i} selectCar={this.props.currentCarHandler}/>
            })
        }

        return(
            <div className='SideBar_Objects_Top'>
                <Table bordered hover >
                    <thead>
                        <tr>
                            <th className='SideBar_Objects_Top__visible' style={{width: '10%'}}></th>
                            <th className='SideBar_Objects_Top__follow' style={{width: '10%'}}></th>
                            <th style={{width: '10%'}}></th>
                            <th style={{width: '70%'}}>Object</th>
                        </tr>
                    </thead>
                    <tbody>{cars}</tbody>
                </Table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        carsList: state.allCars.cars
    }
}

export default connect(mapStateToProps, null)(SideBar_Top)