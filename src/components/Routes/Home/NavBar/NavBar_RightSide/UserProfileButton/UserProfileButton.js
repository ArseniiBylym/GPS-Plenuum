import React from 'react';
import './UserProfileButton.scss';
import UserSVG from '../../../../../../lib/img/user.svg'
import {Button} from 'reactstrap'

function UserProfileButton (props){
        const {photo, name} = props
        return(
            <Button color='white' className='UserProfileButton' data-toggle="tooltip" data-placement="bottom" title="My account">
                <div className="UserProfileButton__container">
                    <div className="UserProfileButton__immage"><img src={photo ? photo : UserSVG} alt=""/></div>
                    <div className="UserProfileButton__name">{name ? name : 'User'}</div>
                </div>
            </Button>
        )
}

export default UserProfileButton