import { connect4Winner } from "./connect4-winner";
import { useState, useEffect } from "react";
import { findEmptyRow, setInList, setInObj } from "./gameRules";

export function useGameState() {
    const [gameState, setGameState] = useState(() => {
        const jsonString = localStorage.getItem("c4state");
        if (jsonString) {
            console.log("Spielstand lokal geladen!");
            return JSON.parse(jsonString);
        }
        return createInitialState();
    });

    const [stateSeq, setStateSeq] = useState([]);

    useEffect(() => {
        localStorage.setItem("c4state", JSON.stringify(gameState));
    }, [gameState]);

  const handleFieldClick = (col) => {
    if (gameState.winner) return;
    const row = findEmptyRow(gameState.board, col);

    if (row !== -1) {
        setStateSeq([...stateSeq, gameState]);

        const updatedRow = setInList(gameState.board[row], col, gameState.current);
        const updatedBoard = setInList(gameState.board, row, updatedRow);

        
        let nextState = setInObj(gameState, "board", updatedBoard);

        
        if (connect4Winner(gameState.current, updatedBoard)) {
            nextState = setInObj(nextState, "winner", gameState.current);
        } else {
            const nextPlayer = gameState.current === 'r' ? 'b' : 'r';
            nextState = setInObj(nextState, "current", nextPlayer);
        }
        
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
  
  return { ...gameState, handleFieldClick, handleUndo, reset };
}

const createInitialState = () => ({
    board: Array(6).fill(null).map(() => Array(7).fill("")),
    current: "r",
    winner: null
});