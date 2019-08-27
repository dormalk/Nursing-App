import React from 'react';
import { ButtonToolbar, Button }from 'react-bootstrap';
import './Styles/_buttons.css';

const ButtonsPanel = (props) =>{
    return(
        <ButtonToolbar
            id="buttonsPanel"
        >
            <Button 
            variant="primary"
            onClick = {() => props.onNursingSidePress('ימני')}
            >ימני</Button>
            <Button 
                variant="secondary"
                onClick={() => props.onNursingSidePress('שמאלי')}>שמאלי</Button>
            <Button 
            variant="danger"
            onClick={() => props.resetAll()}>איפוס</Button>

        </ButtonToolbar>
    );
}

export default ButtonsPanel;