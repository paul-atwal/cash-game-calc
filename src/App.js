import { useState } from "react";
import "./App.css";
import Player from "./components/Player";

function App() {
  const [players, setPlayers] = useState([
    { name: "Alice", buyin: 10, finalStack: 20, result: 10 },
    { name: "Bob", buyin: 20, finalStack: 40, result: 20 },
  ]);

  const handlePlayerChange = (index, updatedPlayer) => {
    const updatedPlayers = players.map((player, i) =>
      i === index ? updatedPlayer : player
    );
    setPlayers(updatedPlayers);
  };

  const addPlayers = () => {
    const newPlayer = { name: "", buyin: 0, finalStack: 0, result: 0 };
    setPlayers([...players, newPlayer]);
  };

  const removePlayers = () => {
    if (players.length > 2) {
      setPlayers(players.slice(0, -1));
    }
  };

  return (
    <div className="App">
      <h1>Poker Cash Game Calculator</h1>
      <div className="change-players">
        <span>Number of Players: </span>
        <span>{players.length}</span>
        <button onClick={addPlayers}>+</button>
        <button onClick={removePlayers}>-</button>
      </div>
      <table className="players-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Buy In</th>
            <th>Final Stack</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <Player
              key={index}
              initialName={player.name}
              initialBuyin={player.buyin}
              initialFinalStack={player.finalStack}
              initialResult={player.result}
              onPlayerChange={(updatedPlayer) =>
                handlePlayerChange(index, updatedPlayer)
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
