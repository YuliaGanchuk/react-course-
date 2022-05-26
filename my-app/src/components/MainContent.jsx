import React from "react";


const ListOfRadio = (props) => {
    const number = props.value;
    const numberArray = [];
    for( let i= 1; i<=number; i++){
        numberArray.push(i);
    }
    
    const listItems = numberArray.map((element) => 
    <li>
            <input type="radio" name="rad" id={element} value={element} />
            <label htmlFor={element}>{element}</label>
    </li>)
    return(

        <ul>{listItems}</ul>
 
    );
}

const InputText =() => {
    return(
        
        <input type="text" placeholder="Write your feedback" />

    );
}
const ButtonSubmitText = () => {
    return(

        <button>Send feedback</button>

    );
}

const MainContent = (props) => {
    return(
        <div>
            <h3>How would you rate our course?</h3>
            <ListOfRadio value = {props.value}/>
            <InputText/>
            <ButtonSubmitText/>
        </div>

    );

}
export default MainContent;