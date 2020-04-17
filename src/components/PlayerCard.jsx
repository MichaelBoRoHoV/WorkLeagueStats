import React from "react";
import CardTop from "./CardTop";

function PlayerCard(props) {
    return (
        <div className="card">
            <CardTop 
            teamName = {props.teamName}
            />
            <div className="card-body">
                <img className="player-img" src={props.img} alt={props.alt}  />
                    <div className="player-info">
                        <div className="jersy">#{props.jersey}</div>
                        <div className="firstName">{props.fName}</div>
                        <div className="lastName">{props.lName}</div>
                    </div>
            </div>
            <div className="card-buttom">
                <h1>STATS</h1>
                <div className="grid-container">
                    <div className="grid-header">PPG</div>
                    <div className="grid-header">RPG</div>
                    <div className="grid-header">APG</div>
                    <div className="grid-item">{props.ppg}</div>
                    <div className="grid-item">{props.rpg}</div>
                    <div className="grid-item">{props.apg}</div>
                </div>
            </div>
       </div>
    )
}
export default PlayerCard;