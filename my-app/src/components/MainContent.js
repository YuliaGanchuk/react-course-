import React, {useState, useEffect} from "react";
import {ListOfRadio} from "./ListOfRadio/ListOfRadio";
import {Input} from "./Input/Input";
import {Button} from "./Button/Button";
import {Feedback} from "./Feedback/Feedback";


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

    useEffect(() => {
        document.getElementById("inputItem").addEventListener("keydown", function (event) {
                if (event.code === "Enter" || event.code === "NumpadEnter") {
                    event.preventDefault();
                    document.getElementById("submitButton").click();
                }
            });
    }, []);

    return(
        <div>
            <div className="mainContainer">
                <h3 className="titleForList">How would you rate our course?</h3>
                <ListOfRadio numberList = {number} stateList= {stateList} onChangeFuncList = {onChangeFuncList}/>
                <div className="inputButton">
                    <Input stateInput={stateInput} onChangeFuncInput={onChangeFuncInput}/>
                    <Button stateInput={stateInput} onClickFunc ={onClickFunc}/>
                </div>
            </div>
            <Feedback review= {review}/>
        </div>
    );
}
