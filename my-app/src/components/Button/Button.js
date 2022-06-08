import React from "react";
import styles from "./Button.module.scss"

export const Button = ({stateInput, onClickFunc}) => {
    return(
        <button id="submitButton" className={styles.buttonStyle} disabled = {!stateInput} onClick = {onClickFunc}>Send</button>
    );
} 