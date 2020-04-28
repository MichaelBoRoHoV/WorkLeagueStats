import React from "react";
import Table from "react-bootstrap/Table";
import TableRow from "./TableRow";
import gamesData from "../objects/gamesData";



function GameTable(){
    return (
        <Table className="games-table" striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Player's Name</th>
            <th>PTS</th>
            <th>REB</th>
            <th>AST</th>
            <th>STL</th>
            <th>BLK</th>
            <th>3PTM</th>
            <th>FGM/A</th>
            <th>FG%</th>
            <th>FTM/A</th>
            <th>FT%</th>
            <th>TOV</th>
          </tr>
        </thead>
        <tbody>
              {gamesData.map(playerStats=> (
                playerStats.gamePlayerStats.map(x=>(
                  <TableRow 
                     key = {x.playerId}
                     id = {x.playerId}
                     playerName = {x.playerName}
                     pts = {x.points}
                     reb = {x.rebounds}
                     ast = {x.assists}
                     stl = {x.steals}
                     blk = {x.blocks}
                     threePointsMade = {x.threePointsMade}
                     fgm = {x.fieldGoalMade}
                     fga = {x.fieldGoalAtt}
                     fgp = {x.fieldGoalPct}
                     ftm = {x.freeThrowMade}
                     fta = {x.freeThrowAtt}
                     ftp = {x.freeThrowMade}
                     tov = {x.turnover}
                   />
                ))
              ))}
        </tbody>
      </Table>
    )
};

export default GameTable;