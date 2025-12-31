import { useGameState } from "./logic/useGameState";
import { Status } from "./components/Status";
import { Board } from "./Board";
import "./App.css";
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei";

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

      <Canvas camera={{ position: [0, 2, 10]}}>
        <color attach="background" args={['#eba95f']} />
        <fog attach="fog" args={['#eba95f', 5, 35]} />
        <Board board={board} onFieldClick={handleFieldClick}/>
        <ambientLight intensity={0.5}/>
        <pointLight position={[10, 10, 10]} intensity={1}/>

        <OrbitControls />
      </Canvas>
      
      <div className="controls">
        <button onClick={handleUndo} className="undo">Undo</button>
        <button onClick={reset}>Reset</button>
        <a href="./documentation.html" target="_blank" rel="noopener noreferrer">
        <button>Doku</button>
        </a>
      </div>
    </div>
  );
}