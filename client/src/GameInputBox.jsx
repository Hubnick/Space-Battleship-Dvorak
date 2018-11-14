import React from 'react';
import { Input } from 'reactstrap';


const GameInputBox = (props)=>{
    return (
        <Input onChange={props.event} type="text" id="textTypedWord" placeholder="Start typing..." />
    )
}

export default GameInputBox;