export function setInList(lst, idx, val) {
    const newList = [...lst];
    newList[idx] = val;
    return newList;
}

export function setInObj(obj, attr, val) {
    return { ...obj, [attr]: val };
}

export function findEmptyRow(board, col) {
    for (let row = 5; row>=0; row--) {
        if (board[row][col] === "") {
            return row;
        }
    }
    return -1;
}