import React from "react";
import styles from "./ListOfRadio.module.scss"



export const ListOfRadio = ({numberList, stateList, onChangeFuncList}) => {

    const listItems = Array.from( {length : numberList}, (a, i) =>
        <li key={i}>
            <input type="radio" name="rad" id={i+1} value={i+1} checked = {stateList === i+1} onChange={onChangeFuncList}/>
            <label htmlFor={i+1}>{i+1}</label>
        </li>
    )
    return(
        <ul className={styles.listStyle}>{listItems}</ul>
    );
}