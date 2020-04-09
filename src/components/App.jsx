import React from "react";
import NavigationBar from "./NavigationBar";
import PlayerCard from "./PlayerCard";

function App(){
  return (
    <div>
      <NavigationBar />
      <div className="container-cards">
        <PlayerCard />
      </div>
    </div>
  )
};

export default App;