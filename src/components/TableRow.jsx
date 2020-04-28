import React from 'react';


function TableRow(props){
    return (
        <tr>
        <td>{props.id}</td>
        <td>{props.playerName}</td>
        <td>{props.pts}</td>
        <td>{props.reb}</td>
        <td>{props.ast}</td>
        <td>{props.stl}</td>
        <td>{props.blk}</td>
        <td>{props.threePointsMade}</td>
        <td>{props.fgm} / {props.fga}</td>
        <td>{props.fgp}</td>
        <td>{props.ftm} / {props.fta}</td>
        <td>{props.ftp}</td>
        <td>{props.tov}</td>
      </tr>
    )
};

export default TableRow;