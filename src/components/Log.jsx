export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((gameTurn) => {
        const { square, player } = gameTurn;
        const { row, cell } = square;

        return (
          <li key={`${row}${cell}`}>
            Player {player} selected {row + 1}, {cell + 1}.
          </li>
        )
      })}
    </ol>
  )
}