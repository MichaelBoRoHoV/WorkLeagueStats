import React from "react";
import GameSelect from "../components/GameSelect";
import GameTable from "../components/GameTable";


function GamesPage() {
    return(
        <div>
            <div className="select-game-container">
                <GameSelect />
            </div>
            <GameTable />
        </div>
    )
};


export default GamesPage; 