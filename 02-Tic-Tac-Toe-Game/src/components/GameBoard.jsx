export default function GameBoard({ onSelectSquare, board }) {
  // const [gameBoard, setGameBoard] = useState(intialGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   // Based on the previous state of game board, we will update the new state
  //   // by adding a new cross or 0 in the enpty fields.
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;

  //     return updatedBoard;
  //   });
  //   // We are calling a function which was defined outside of the component but executing it from here
  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
