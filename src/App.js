import { connect4Winner } from "./connect4-winner";

const { useState } = React;

function App() {
  // Hier definieren wir den Zustand mit React-Hooks
  const [gameState, setGameState] = useState(createInitialState());
  const [stateSeq, setStateSeq] = useState([]);

  // Die Klick-Logik wird zu einer Funktion innerhalb der App
  const handleFieldClick = (col) => {
    if (gameState.winner) return;
    const row = findEmptyRow(gameState.board, col);

    if (row !== -1) {
        // 1. Aktuellen Zustand für Undo sichern
        setStateSeq([...stateSeq, gameState]);
        // 2. Neues Board berechnen
        const updatedRow = setInList(gameState.board[row], col, gameState.current);
        const updatedBoard = setInList(gameState.board, row, updatedRow);

        // 3. Neuen Zustand vorbereiten
        let nextState = setInObj(gameState, "board", updatedBoard);

        // 4. Prüfung, ob dieser Zug zum Sieg geführt hat.
        if (connect4Winner(gameState.current, updatedBoard)) {
            nextState = setInObj(nextState, "winner", gameState.current);
        } else {
            const nextPlayer = gameState.current === 'r' ? 'b' : 'r';
            nextState = setInObj(nextState, "current", nextPlayer);
        }
        // 5. Den kompletten neuen Zustand in React setzen
        setGameState(nextState);
    }
  };

  const handleUndo = () => {
    if (stateSeq.length > 0) {
        setGameState(stateSeq.at(-1));
        const lastStates = stateSeq.slice(0, -1);
        setStateSeq([lastStates]);
    }
  };

  const reset = () => {
    setGameState(createInitialState());
    setStateSeq([]);
  };

  const createInitialState = () => ({
    board: Array(6).fill(null).map(() => Array(7).fill("")),
    current: "r",
    winner: null
  });

  return (
    <div className="app-container">
      <h1>Vier gewinnt</h1>
      <Status current={gameState.current} winner={gameState.winner} />
      <Board board={gameState.board} onFieldClick={handleFieldClick} />
      <button onClick={handleUndo} className="undo">Undo</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

function setInList(lst, idx, val) {
    const newList = [...lst];
    newList[idx] = val;
    return newList;
}

function setInObj(obj, attr, val) {
    return { ...obj, [attr]: val };
}

function findEmptyRow(board, col) {
    for (let row = 5; row>=0; row--) {
        if (board[row][col] === "") {
            return row;
        }
    }
    return -1;
}