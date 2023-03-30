import React, { useState } from 'react';

function Span(props) {

    const i = props.index

    const correctClass = (props.userInput[i] == props.snippetCharacter)

    const incorrectClass = (props.userInput[i] != props.snippetCharacter && props.userInput[i] != undefined)

    return (

        <span
            className={`${correctClass ? 'correct' : ''}${incorrectClass ? 'incorrect' : ''}`}
            id={`sp${props.index}`} >
            {props.snippetCharacter}
        </span>

    )
}

export default Span;