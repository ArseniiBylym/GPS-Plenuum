import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Card, CardBody, CardHeader, CardText, CardTitle, Button } from 'reactstrap';

class Chart extends Component {
    state = {
        
    }

    render() {
        return(
            <Draggable bounds="parent" >
            <Card className='Chart'>
                <CardHeader color="primary">Chart<Button close onClick={this.props.click.bind(this, this.props.name)} /></CardHeader>
                <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </CardBody>
            </Card>
        </Draggable>
        )
    }
}

export default Chart