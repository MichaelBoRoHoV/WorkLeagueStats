import React from "react";
import GameSelectOptions from "./GameSelectOptions";
import games from "../objects/games.js";


function CreateGamesList(game){
    
    const {date,teams:[{teamA},{teamB}]} = game;
    const desciption = teamA + " Vs. " + teamB + ", " + date;
    
    return(
        <GameSelectOptions
            key = {game.id}
            id = {game.id}
            gameDesciption = {desciption}
        />
    )
}





function GameSelect(props){
    return ( 
        <div className="select-box">
            <div className="options-container">
            {games.map(CreateGamesList)}
            </div>

            <div className="selected">
            Select A Game
            </div>

            <div className="search-box">
                <input type="text" placeholder="Start Typing..." />
            </div>
        </div>    
    )
};



export default GameSelect;