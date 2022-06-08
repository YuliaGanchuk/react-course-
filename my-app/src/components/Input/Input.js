import React from "react";
import styles from "./Input.module.scss"

export const Input = ({stateInput, onChangeFuncInput}) => {
     return(
        <input id ="inputItem" className={styles.inputStyle} type="text" value={stateInput} onChange = {onChangeFuncInput} placeholder="Write a review" />
    );
}