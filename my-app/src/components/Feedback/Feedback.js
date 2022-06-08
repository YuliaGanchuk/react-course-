import React from "react";
import styles from "./Feedback.module.scss"

export const Feedback = ({review}) => {

    return(
        review.map( (element, index) => (
            <div className={styles.feedbackText} key={index}>
                <div className={styles.feedbackNumber}>{element.rateNumber}</div>
                <p>{element.rateText}</p>
            </div>   
        ))
    );
}
