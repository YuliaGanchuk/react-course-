import React, {useState} from "react";
import {ListOfRadio} from "./ListOfRadio";
import {Input} from "./Input";
import {Button} from "./Button";
import {Feedback} from "./Feedback";


export const MainContent = (props) => {
    const number = props.value;
    const numberCheckedLi = 10;
    const [stateInput, setStateInput] = useState("");
    const [stateList, setStateList] = useState(number);
    const [ review, setReview] = useState([]);
    
    const onChangeFuncInput = (event) => {
        setStateInput(event.target.value); 
    }
    const onChangeFuncList = (event) => {
        setStateList(+event.currentTarget.value); 
    }
    const onClickFunc = () => {
        setReview([...review, {rateNumber: stateList, rateText: stateInput}]);
        setStateInput("");
        setStateList(numberCheckedLi);
    }

    return(
        <div>
            <h3>How would you rate our course?</h3>
            <ListOfRadio numberList = {number} stateList= {stateList} onChangeFuncList = {onChangeFuncList}/>
            <Input stateInput={stateInput} onChangeFuncInput={onChangeFuncInput}/>
            <Button stateInput={stateInput} onClickFunc ={onClickFunc}/>
            <Feedback review= {review}/>
        </div>
    );

}
