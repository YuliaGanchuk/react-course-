import React from "react";

export const Feedback = ({review}) => {
    return(
        review.map( (element) => (
            <p key={Date.now()}> {element.rateNumber} - {element.rateText}</p>
        ))
    );

}