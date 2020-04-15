import React from "react";
import NavigationBar from "./NavigationBar";
import PlayerCard from "./PlayerCard";
import players from "../players.js"

function App(){
  return (
    <div>
      <NavigationBar />
      <div className="container-cards">
        {players.map(player => (
          <PlayerCard 
            key = {player.id}
            teamName = {player.team}
            jersey = {player.jersey}
            fName = {player.firstName}
            lName = {player.lastName}
            img = {player.imgURL} alt = "player image"  
            ppg = {player.stats.ppg}
            rpg = {player.stats.rpg}
            apg = {player.stats.apg}
          />
        ))};
      </div>
    </div>
  )
};

export default App;