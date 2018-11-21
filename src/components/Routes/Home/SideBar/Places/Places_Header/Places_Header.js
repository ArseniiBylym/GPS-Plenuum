import React from 'react';
import './Places_Header.scss';
import { Input, Button, InputGroup, InputGroupAddon } from 'reactstrap'
import SearchIcon from '../../../../../../lib/img/search.svg'

function Places_Header(props) {
    console.log(props.currentTab)

        return(
            <div className='Places_Header'>
                <InputGroup>
                    <InputGroupAddon className='Places_Header__input-addon' addonType="prepend"><img src={SearchIcon} alt=""/></InputGroupAddon>
                    <Input type="text" name="text" id="searchPlaces" placeholder="Search"/>
                </InputGroup>
                <Button color='secondary' className='Places_Header__reload-icon' data-toggle="tooltip" data-placement="bottom" title="Reload" />
                {props.currentTab === 'markers' ? <Button color='secondary' className='Places_Header__marker-icon' data-toggle="tooltip" data-placement="bottom" title="Add marker" />
                    : props.currentTab === 'routes' ? <Button color='secondary' className='Places_Header__route-icon' data-toggle="tooltip" data-placement="bottom" title="Add route" /> 
                    : props.currentTab === 'zones' ? <Button color='secondary' className='Places_Header__zone-icon' data-toggle="tooltip" data-placement="bottom" title="Add zone" /> 
                    : null
                }
                <Button color='secondary' className='Places_Header__groups-icon' data-toggle="tooltip" data-placement="bottom" title="Groups" />
                <Button color='secondary' className='Places_Header__import-icon' data-toggle="tooltip" data-placement="bottom" title="Import" />
                <Button color='secondary' className='Places_Header__export-icon' data-toggle="tooltip" data-placement="bottom" title="Export" />
                <Button color='secondary' className='Places_Header__delete-icon' data-toggle="tooltip" data-placement="bottom" title="Delete all markers" />
            </div>
        )
}

export default Places_Header