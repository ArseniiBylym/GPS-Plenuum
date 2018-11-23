import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardText, CardTitle, Button } from 'reactstrap';
import Draggable from 'react-draggable';

class About extends Component {
    state = {

    }

    render() {
        return (
            <div className='About'>
                <Draggable bounds="parent" handle='.card-header'>
                    <Card>
                        <CardHeader color="primary">Header<Button close onClick={this.props.click.bind(this, this.props.name)} /></CardHeader>
                        <CardBody>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </CardBody>
                    </Card>
                </Draggable>
            </div>
        )
    }
}

export default About