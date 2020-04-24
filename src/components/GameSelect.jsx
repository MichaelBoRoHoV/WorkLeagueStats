import React from "react";
import GameSelectOptions from "./GameSelectOptions";
import games from "../objects/games.js";

const [gameObj] = games;
const {date,teams:[{teamA},{teamB}]} = gameObj;
const desciption = teamA + " Vs. " + teamB + ", " + date;



function GameSelect(props){
    return ( 
        <div className="select-box">
            <div className="options-container">
            {games.map(game => (
                <GameSelectOptions
                    key = {game.id}
                    id = {game.id}
                    gameDesciption = {desciption}
                />
            ))}
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