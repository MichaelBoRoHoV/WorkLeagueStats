import React from "react";


function PlayerCard(props) {
    return (
        <div className="card">
            <div className="card-top">  
                <p>WSC-West</p>
            </div>
            <div className="card-body">
                <img className="player-img" src="images/LeBron.png" alt="lebron james" />
                    <div className="player-info">
                        <div className="jersy">#6</div>
                        <div className="firstName">LEBRON</div>
                        <div className="lastName">JAMES</div>
                    </div>
            </div>
            <div className="card-buttom">
                <h1>STATS</h1>
                <div className="grid-container">
                    <div className="grid-header">PTS</div>
                    <div className="grid-header">REB</div>
                    <div className="grid-header">AST</div>
                    <div className="grid-item">38</div>
                    <div className="grid-item">17</div>
                    <div className="grid-item">12</div>
                </div>
            </div>
       </div>
    )
}
export default PlayerCard;