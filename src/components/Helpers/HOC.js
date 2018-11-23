import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';

export function withCloseHandler(WrappedComponent, props) {

    const moveToTop = () => {
        const anotherWindows = [...document.getElementsByClassName('react-draggable')];
        anotherWindows.forEach((item, i) => {
            item.style.zIndex = '1000';
        })
        document.getElementById(props.id).style.zIndex = '1050';
    }

    return (
        <Draggable bounds="parent" onStart={moveToTop}>
            <Card className={props.name} id={props.id} >
                <CardHeader color="primary">{props.name}<Button close onClick={props.click.bind(this, props.id)} /></CardHeader>
                <CardBody>
                    <WrappedComponent />
                </CardBody>
            </Card>
        </Draggable>
    )

}
