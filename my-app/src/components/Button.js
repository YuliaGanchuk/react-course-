import React from "react";

export const Button = ({stateInput, onClickFunc}) => {
    return(
        <button disabled = {!stateInput} onClick = {onClickFunc}>Send feedback</button>
    );
} 