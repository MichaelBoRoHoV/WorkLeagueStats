import React from "react";
import GameSelectOptions from "./GameSelectOptions";
import games from "../objects/games.js";


function CreateGamesList(game){
    
    const {id,date,teams:[{teamA},{teamB}]} = game;
    const desciption = teamA + " Vs. " + teamB + ", " + date;
    
    return(
        <GameSelectOptions
            key = {id}
            id = {id}
            gameDesciption = {desciption}
        />
    )
}


function Select(props){
    return ( 
        <div className="select-box">
            <div className="options-container">
            {games.map(CreateGamesList)}
            </div>

            <div className="selected">
            {props.title}
            </div>

            <div className="search-box">
                <input type="text" placeholder="Start Typing..." />
            </div>
        </div>    
    )
};



export default Select;