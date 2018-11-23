import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Card, CardBody, CardHeader, CardText, CardTitle, Button } from 'reactstrap';


class Point extends Component {
    state = {

    }

    render() {
        return (
            <Draggable bounds="parent" >
                <Card className='Point'>
                    <CardHeader color="primary">Point<Button close onClick={this.props.click.bind(this, this.props.name)} /></CardHeader>
                    <CardBody>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBody>
                </Card>
            </Draggable>
        )
    }
}

export default Point