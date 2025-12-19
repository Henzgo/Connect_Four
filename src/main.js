import { createInitialState } from "./state.js";

const state = createInitialState();
const boardEl = document.querySelector(".board");
const resetBtn = document.querySelector("#reset-btn");
const statusEl = document.querySelector("#status");

boardEl.addEventListener("click", (event) => {
    // Feld finden, welches geklickt wurde
    const field = event.target.closest(".field");
    if (!field) return;

    const col = parseInt(field.dataset.col);

    for (let row = 5; row >= 0; row--) {
        if (state.board[row][col] === "") {
            state.board[row][col] = state.current; // Aktualisieren das Board mit dem aktuellen Spieler

            state.current = state.current === 'r' ? 'b' : 'r';

            showBoard(state);
            break;
        }
    }
});

resetBtn.addEventListener("click", () => {
    state.board = state.board.map(row => row.fill(""));
    state.current = 'r';

    showBoard(state);
});

function showBoard(state) {
    boardEl.innerHTML = ""; // alte Felder löschen
    const playerName = state.current === 'r' ? 'Rot' : 'Blau';
    statusEl.textContent = `${playerName} ist am Zug`;

    for (let row = 0; row < 6; row++) {
        for (let col =0; col < 7; col++) {
            const field = document.createElement("div");
            field.className = "field";

            const type = state.board[row][col]; // '' | 'r' | 'b'
            if (type !== "") {
                const piece = document.createElement("div");
                piece.className = `piece ${type === "r" ? "red" : "blue"}`;
                field.appendChild(piece);
            }

            // Position für spätere Klick-Logik merken
            field.dataset.row = row; // Als String abgespeichert
            field.dataset.col = col; // Als String abgespeichert
            boardEl.appendChild(field);
        }
    }
}

showBoard(state);