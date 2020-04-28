import React from "react";
import GameSelect from "../components/GameSelect";
import GameTable from "../components/GameTable";


//destruct the gamePlayerStats object and create a function to insertRows.


function GamesPage() {
    return(
        <div>
            <div className="select-game-container">
                <GameSelect />
            </div>
            <div className="container">
                <GameTable/>
            </div>
        </div>
    )
};


export default GamesPage; 