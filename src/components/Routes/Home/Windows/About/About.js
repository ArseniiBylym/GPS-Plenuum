import React, { Component } from 'react';
import './About.scss'; 
import {Card, CardBody, CardHeader, CardText, CardTitle, Button} from 'reactstrap';

class About extends Component {
    state = {
        
    }

    render() {
        return(
            <div className='About'>
                {/* <div className="About-conteiner">
                    <div className="About-container__header">header</div>
                    <div className="About-container__content">main</div>
                </div> */}
                 <Card>
                    <CardHeader color="primary">Header<Button close onClick={this.props.click.bind(this, this.props.name)}/></CardHeader>
                    <CardBody>
                    <CardTitle>Special Title Treatment</CardTitle>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default About