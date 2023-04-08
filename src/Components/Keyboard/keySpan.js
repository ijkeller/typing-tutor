import React from 'react';

function KeySpan(props) {


    return (
            <li
                className={props.classN}
                id={props.id}>
                {props.val}
            </li>
    )
}

export default KeySpan;