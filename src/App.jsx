import { useGameState } from "./logic/useGameState";
import { Status } from "./components/Status";
import { Board2D } from "./components/Board2D";
import "./App.css";

export default function App() {
  const { board,
    current,
    winner,
    handleFieldClick,
    handleUndo,
    reset
  } = useGameState();

  return (
    <div className="app-container">
      <h1>Vier gewinnt</h1>

      <Status current={current} winner={winner} />

      <Board2D board={board} onFieldClick={handleFieldClick} />
      
      <div className="controls">
        <button onClick={handleUndo} className="undo">Undo</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}