import React from "react";

export const Feedback = ({review}) => {
    return(
        review.map( (element) => (
            <p> {element.rateNumber} - {element.rateText}</p>
        ))
    );

}