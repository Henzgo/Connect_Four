import { connect4Winner } from "../connect4-winner";
import { useState, useEffect } from "react";
import { findEmptyRow, setInList, setInObj } from "./gameRules";

export function useGameState() {
    const [gameState, setGameState] = useState(() => { // with this we make sure that react checks the local storage,
        //before it even renders the first pixel.
        const jsonString = localStorage.getItem("c4state");
        if (jsonString) {
            console.log("Spielstand lokal geladen!");
            return JSON.parse(jsonString);
        }
        return createInitialState();
    });

    const [stateSeq, setStateSeq] = useState([]);

    // Saving. This will run every time "gameState" changes.
    useEffect(() => {
        localStorage.setItem("c4state", JSON.stringify(gameState));
    }, [gameState]); // <-- The Dependency Array

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
        setStateSeq(lastStates);
    }
  };

  const reset = () => {
    setGameState(createInitialState());
    setStateSeq([]);
  };
  // Return everything the App needs to know or do.
  return { ...gameState, handleFieldClick, handleUndo, reset };
}

const createInitialState = () => ({
    board: Array(6).fill(null).map(() => Array(7).fill("")),
    current: "r",
    winner: null
});