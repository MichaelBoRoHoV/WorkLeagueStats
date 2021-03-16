import React from "react";
import Select from "../components/Select";
import GameTable from "../components/GameTable";


//destruct the gamePlayerStats object and create a function to insertRows.


function GamesPage() {
    return(
        <div>
            <div className="select-game-container">
                <Select 
                    title = "Select A Game"
                />
            </div>
            <div className="container">
                <GameTable/>
            </div>
        </div>
    )
};


export default GamesPage; 