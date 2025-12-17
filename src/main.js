import { createInitialState } from "./state.js";

const state = createInitialState();
showBoard(state);

function showBoard(state) {
    const boardEl = document.querySelector(".board");
    boardEl.innerHTML = ""; // alte Felder löschen

    for (let row = 0; row < 6; row++) {
        for (let column =0; column < 7; column++) {
            const field = document.createElement("div");
            field.className = "field";

            // Position für spätere Klick-Logik merken
            field.dataset.row = row;
            field.dataset.column = column;

            boardEl.appendChild(field);
        }
    }
}