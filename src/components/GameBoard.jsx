import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  function handleCellClick(rowIndex, cellIndex, playerSymbol = 'X') {
    setGameBoard((prevGameBoard) => function updateGameBoard() {
      const newGameBoard = [...prevGameBoard];
      if (newGameBoard[rowIndex][cellIndex] === null ) {
        newGameBoard[rowIndex][cellIndex] = playerSymbol;
      }
      return newGameBoard;
    }());
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => 
      <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, cellIndex) => 
          <li key={cellIndex}>
            <button onClick={() => handleCellClick(rowIndex, cellIndex)}>{playerSymbol}</button>
            </li>)}
        </ol>
      </li> )}
    </ol>
  )
}