import React from "react";

export const Input = ({stateInput, onChangeFuncInput}) => {
     return(
        <input type="text" value={stateInput} onChange = {onChangeFuncInput} placeholder="Write your feedback" />
    );
}