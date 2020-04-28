import React from "react";
import Table from "react-bootstrap/Table";
import TableRow from "./TableRow";
import gamePlayerStats from "../objects/gamePlayerStats";



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
              {gamePlayerStats.map(playerStats=> (
                <TableRow 
                key = {playerStats.playerId}
                id = {playerStats.playerId}
                playerName = {playerStats.playerName}
                pts = {playerStats.points}
                reb = {playerStats.rebounds}
                ast = {playerStats.assists}
                stl = {playerStats.steals}
                blk = {playerStats.blocks}
                threePointsMade = {playerStats.threePointsMade}
                fgm = {playerStats.fieldGoalMade}
                fga = {playerStats.fieldGoalAtt}
                fgp = {playerStats.fieldGoalPct}
                ftm = {playerStats.freeThrowMade}
                fta = {playerStats.freeThrowAtt}
                ftp = {playerStats.freeThrowMade}
                tov = {playerStats.turnover}
               />
              ))}
        </tbody>
      </Table>
    )
};

export default GameTable;