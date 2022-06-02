import React from "react";
import styles from "./Header.module.scss"

export const Header = (props) => {
    return(
        <h1 className={styles.headerStyle}>Feedback Project from United Software by {props.name}</h1>
    );

}
