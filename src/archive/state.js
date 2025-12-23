// state.js
export function createEmptyBoard(rows = 6, cols = 7) {
  return Array.from({ length: rows }, () => Array(cols).fill(''));
}

export function createInitialState() {
  return {
    board: createEmptyBoard(), // Eigentlich unnötig
    current: 'r',     // 'r' oder 'b'
    winner: null,     // 'r' | 'b' | null
    gameOver: false,
  };
}
