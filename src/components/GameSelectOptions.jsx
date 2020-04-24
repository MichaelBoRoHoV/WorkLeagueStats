import React from "react";




function GameSelectOptions(props){
    return ( 
        <div className="option">
            <input type="radio" className="radio" id={props.id} name="category" />
            <label htmlFor={props.id}>{props.gameDesciption}</label>
        </div>
    )
};




export default GameSelectOptions;