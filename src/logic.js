// logic.js
export function dropPiece(board, col, player) {
  // returns { board: newBoard, row: placedRow } or null if column full
  for (let row = board.length - 1; row >= 0; row--) {
    if (board[row][col] === '') {
      const newBoard = board.map(r => r.slice());
      newBoard[row][col] = player;
      return { board: newBoard, row };
    }
  }
  return null;
}

export function nextPlayer(p) {
  return p === 'r' ? 'b' : 'r';
}
