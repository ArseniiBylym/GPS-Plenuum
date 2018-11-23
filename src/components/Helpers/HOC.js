import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';

export function withCloseHandler(WrappedComponent, props) {

    return (
        <Draggable bounds="parent" >
            <Card className={props.name} id={props.id}>
                <CardHeader color="primary">{props.name}<Button close onClick={props.click.bind(this, props.id)} /></CardHeader>
                <CardBody>
                    <WrappedComponent />
                </CardBody>
            </Card>
        </Draggable>
    )

}
