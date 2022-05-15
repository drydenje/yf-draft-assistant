import React from "react";

function PlayerList({ players }) {
  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          {player.player.nameFirst} {player.player.nameLast}
        </div>
      ))}
    </div>
  );
}

export default PlayerList;