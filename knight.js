console.log(`knight`)

// create board
const boardContainer = document.querySelector('div.boardContainer')
const createBoard = () => {
    let grid = [];
    for (let i = 0; i < 8; i++) {
        let item = [];
        grid.push(item);
        for (let i = 0; i< 8; i++) {
            item.push(Number('0'));
        }
    };
    return grid;
    }
const board = createBoard();

const cellFactory = (x, y, depth, parent) => {
    return {x, y, depth, parent};
}

// so i have an array with all the grid squares
// check to see if the move is on the board
const onTheBoard = (input) => {
    if (input.x < 0 || input.x > 7 || input.y < 0 || input.y > 7) {
        return false;
    } else {
        return true;
    }
}
// check to see if square has already been played
const squareAvailable = (input) => {
    if (board[input.x][input.y] == 0) {
            return true;
        } else {
            return false;
        }
}
// input current array position, returns an array of possible moves (on the board)
const possibleMoves = (input) => {
    let array = [];
    array.push([input.x + 1, input.y + 2]);
    array.push([input.x + 1, input.y - 2]);
    array.push([input.x + 2, input.y + 1]);
    array.push([input.x + 2, input.y - 1]);
    array.push([input.x - 1, input.y + 2]);
    array.push([input.x - 1, input.y - 2]);
    array.push([input.x - 2, input.y + 1]);
    array.push([input.x - 2, input.y - 1]);
    let filtered = array.filter(index => {
        if (onTheBoard(index) && squareAvailable(input)) {
            return index;
        }
    })
    return filtered;
}

const xMoves = [1, 1, 2, 2, -1, -1, -2, -2];
const yMoves = [2, -2, 1, -1, 2, -2, 1, -1];

// attempt at recursive knightMoves
const knightMoves = (move, goal, depth) => {
    const cell = cellFactory(move[0], move[1], 0);
    const queue = [cell];
    console.log(cell);
    while (queue.length != 0) {
        let pop = queue.shift();
        console.log(queue);
        if (pop.x == goal[0] && pop.y == goal[1]) {
            return pop;
        }
        let x;
        let y;
        for (let i = 0; i<8; i++) {
            x = pop.x + xMoves[i];
            y = pop.y + yMoves[i];
            let celly = cellFactory(x, y, depth + 1, pop);
            if (onTheBoard(celly) && squareAvailable(celly)) {
                board[x][y] = 1;
                queue.push(celly);
            }
        }
    }
}
        // have to edit the board
        // have to call the recursion on edited board
        // have to remove the move
        // have to push the move into the moves array

console.log(knightMoves([0,0], [3,3], 0));