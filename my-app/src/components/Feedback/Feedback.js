import React from "react";
import styles from "./Feedback.module.scss"

export const Feedback = ({review}) => {

    const generateKey = (el) => {
        return `${el}_${Date.now()}`;
    }
    return(
        review.map( (element) => (
            <div className={styles.feedbackText} key={generateKey(element.rateText)}>
                <div className={styles.feedbackNumber}>{element.rateNumber}</div>
                <p>{element.rateText}</p>
            </div>   
        ))
    );
}