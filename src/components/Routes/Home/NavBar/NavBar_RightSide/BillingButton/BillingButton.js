import React from 'react';
import './BillingButton.scss';
import { Button, Badge } from 'reactstrap';

function BillingButton(props) {

        return(
            <Button className='BillingButton' color="info" data-toggle="tooltip" data-placement="bottom" title="Billing">
                <div className="BillingButton-container">
                    <div className="icon"></div>
                    <Badge color="white">0</Badge>
                </div>
            </Button>
        )
}

export default BillingButton