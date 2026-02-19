import { useState } from "react"

import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState("X");

  function handlePlayerChange(rowIndex, cellIndex) {
    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X");

    setGameTurns((prevGameTurns) => {
      let currentPlayer = 'X';

      if (prevGameTurns.length > 0 && prevGameTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedGameTurns = [
        { square: { row: rowIndex, cell: cellIndex }, player: currentPlayer },
         ...prevGameTurns
      ];

      return updatedGameTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>

        <GameBoard 
        onSelectCell={handlePlayerChange} 
        gameTurns={gameTurns}
        />
      </div>
      <Log />
    </main>
  )
}

export default App
