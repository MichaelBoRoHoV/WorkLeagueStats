import React from "react";


function doSomthing(){
    console.log("game was chosen");
    
}


function GameSelectOptions(props){
    return ( 
        <div className="option">
            <input type="radio" onClick={doSomthing} className="radio" id={props.id} name="category" />
            <label htmlFor={props.id}>{props.gameDesciption}</label>
        </div>
    )
};




export default GameSelectOptions;