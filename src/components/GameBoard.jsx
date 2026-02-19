// const initialGameBoard = [
//   [null, null, null],
//   [null, null, null],
//   [null, null, null]
// ]

export default function GameBoard({ onSelectCell, board}) {
  // computed value derived from state
  // manage as little state as needed
  // let gameBoard = initialGameBoard.map(row => [...row]);

  // for (const gameTurn of gameTurns) {
  //   const { square, player } = gameTurn;
  //   const { row, cell } = square;

  //   //location in array/board set equal to the player symbol
  //   gameBoard[row][cell] = player; 
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => 
      <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, cellIndex) => 
          <li key={cellIndex}>
            <button onClick={() => onSelectCell(rowIndex, cellIndex)} disabled={playerSymbol !== null}>
              {playerSymbol}
            </button>
            </li>)}
        </ol>
      </li> )}
    </ol>
  )
}