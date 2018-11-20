import React, {Component} from 'react';
import './DetailsList.scss';

class DetailsList extends Component {

    render() {
        let detailsItems = []

        for(let v in this.props.details){
            if(v === 'Position') {
                detailsItems.push( 
                    <tr key={v}>
                        <td>{v}</td>
                        <td><a href='#'>{this.props.details[v].lat}°, {this.props.details[v].long}°</a></td>
                    </tr>
                )
            } else if(v === 'Driver Name') {
                detailsItems.push( 
                    <tr key={v}>
                        <td>{v}</td>
                        <td><a href='#'>{this.props.details[v]}</a></td>
                    </tr>
                )
            } else {
                detailsItems.push( 
                    <tr key={v}>
                        <td>{v}</td>
                        <td>{this.props.details[v]}</td>
                    </tr>
                )
            }
        }
        return(
            <tbody className='DetailsList'>
                {detailsItems}
            </tbody>
        )
    }
}

export default DetailsList