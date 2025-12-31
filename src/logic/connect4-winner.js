export function connect4Winner(player, board) {
    for (let row = 0; row <= 5; row++) { 
        for (let col = 0; col <= 3; col++) { 
            if (board[row][col] === player && 
                board[row][col+1] === player && 
                board[row][col+2] === player && 
                board[row][col+3] === player) { 
                    return true; 
                }
            }
        };

    for (let row = 0; row <= 2; row++) { 
        for (let col = 0; col <= 6; col++) { 
            if (board[row][col] === player && 
                board[row+1][col] === player && 
                board[row+2][col] === player && 
                board[row+3][col] === player) { 
                    return true; 
                }
            }
        };
        
    for (let row = 0; row <= 2; row++) {
        for (let col = 0; col <= 3; col++) {
            if (board[row][col] === player &&
                board[row+1][col+1] === player &&
                board[row+2][col+2] === player &&
                board[row+3][col+3] === player) {
                    return true;
                }
            }
        };

    for (let row = 5; row >= 3; row--) {
        for (let col = 0; col <= 3; col++) {
            if (board[row][col] === player &&
                board[row-1][col+1] === player &&
                board[row-2][col+2] === player &&
                board[row-3][col+3] === player) {
                    return true;
                }
            }
        };
    return false;
}