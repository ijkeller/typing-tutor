import React from 'react';

function KeySpan(props) {

    const identifier = props.line + props.index

    return (
            <li
                className={props.classN}
                id={identifier}>
                {props.val}
            </li>
    )
}

export default KeySpan;