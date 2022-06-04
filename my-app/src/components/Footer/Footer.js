import React from "react";
import styles from "./../Header/Header.module.scss"

 export const Footer = (props) => {
    return(
        <h2 className={styles.headerStyle}>© Made by {props.name}</h2>
    );
}
