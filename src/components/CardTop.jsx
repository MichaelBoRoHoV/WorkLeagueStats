import React from "react";

const west = {backgroundColor: "#C9082A"}; 
const east = {backgroundColor: "#17408B"};
const other = {backgroundColor: "#56606a"};

function setTeamColor(teamName){
    switch (teamName) {
        case "WSC-West":
            return west;
        case "WSC-East":
            return east;
        default:
            return other;
    };
}

function CardTop(props){
    return (
        <div className="card-top" style={setTeamColor(props.teamName)}>  
             <p>{props.teamName}</p>
        </div>
    )
};

export default CardTop;
