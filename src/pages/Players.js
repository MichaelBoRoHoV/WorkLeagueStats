import React from "react";
import players from "../objects/players.js";
import PlayerCard from "../components/PlayerCard";



function PlayersPage(){
    return (
        <div className="container-cards">
        {players.map(player => (
          <PlayerCard 
            key = {player.id}
            teamName = {player.team}
            jersey = {player.jersey}
            fName = {player.firstName}
            lName = {player.lastName}
            img = {player.imgURL}   
            ppg = {player.stats.ppg}
            rpg = {player.stats.rpg}
            apg = {player.stats.apg}
          />
        
        ))}
      </div>
    )
};

export default PlayersPage;