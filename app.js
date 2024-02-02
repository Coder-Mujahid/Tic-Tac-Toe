let currentPlayer = 'X';
const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('click', () => {
    if (!square.textContent) {
      square.textContent = currentPlayer;
      if (checkWinner()) {
        alert(`Player ${currentPlayer} wins!`);
        resetGame();
      } else if (isDraw()) {
        alert(`It's a draw!`);
        resetGame();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  });
});

function checkWinner() {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a].textContent &&
      squares[a].textContent === squares[b].textContent &&
      squares[a].textContent === squares[c].textContent
    ) {
      return true; 
    }
  }
  return false; 
}

function isDraw() {
  return Array.from(squares).every((square) => square.textContent);
}

function resetGame() {
  squares.forEach((square) => {
    square.textContent = '';
  });
  currentPlayer = 'X';
}
