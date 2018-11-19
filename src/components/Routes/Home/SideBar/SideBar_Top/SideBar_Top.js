import React, { Component } from 'react';
import './SideBar_Top.scss';
import { Table } from 'reactstrap';
import { connect } from 'react-redux'
import CarItem from './CarItem/CarItem'

class SideBar_Top extends Component {
    state = {
        
    }
    componentDidMount = () => {
        console.log('from Sidebartop update')
    }

    render() {
        console.log(this.props.carsList)

        let cars = null
        console.log(this.props.carsList.length)
        if(this.props.carsList.length > 0) {
            cars = this.props.carsList.map((item, i) => {
                console.log(item.isVisible)
                return <CarItem isVisible={item.isVisible} car={item} index={i} selectCar={this.props.currentCarHandler}/>
            })
        }

        return(
            <div className='SideBar_Top'>
                <Table bordered hover >
                    <thead>
                        <tr>
                            <th style={{width: '10%'}}>#</th>
                            <th style={{width: '10%'}}>@</th>
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