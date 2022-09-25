console.log(`knight`)

// const knightMoves = (start, end) => {

// }

// create board
const boardContainer = document.querySelector('div.boardContainer')
const createBoard = () => {
    let graph = [];
    let grid = [];
    for (let i = 0; i < 8; i++) {
        grid.push(i);
    }
    grid.forEach(index => {
        for (let i = 0; i< 8; i++) {
            graph.push([grid[index], i]);
        }
    });
    return graph;
    }
const board = createBoard();

// so i have an array with all the grid squares
// check to see if the move is on the board
const onTheBoard = (input) => {
    if (input[0] < 0 || input[0] > 7 || input[1] < 0 || input[1] > 7) {
        return false;
    } else {
        return true;
    }
}
// check to see if square has already been played
const squareTaken = (input, array) => {
    let value = array.find(index => {
        if (index[0] == input[0] && index[1] == input[1]) {
            return true;
        } else {
            return false;
        }
    });
    return value;
}
// input current array position, returns an array of possible moves (on the board)
const possibleMoves = (input) => {
    let array = [];
    array.push([input[0] + 1, input[1] + 2]);
    array.push([input[0] + 1, input[1] - 2]);
    array.push([input[0] + 2, input[1] + 1]);
    array.push([input[0] + 2, input[1] - 1]);
    array.push([input[0] - 1, input[1] + 2]);
    array.push([input[0] - 1, input[1] - 2]);
    array.push([input[0] - 2, input[1] + 1]);
    array.push([input[0] - 2, input[1] - 1]);
    let filtered = array.filter(index => {
        if (onTheBoard(index) && squareTaken(index, board)) {
            return index;
        }
    })
    return filtered;
}
// board[17] = ['x', 'y'];
console.log(possibleMoves([0,0]));

// attempt at recursive knightMoves
const knightMoves = (gameboard, move, goal, depth = 0) => {
    const possibleMoves = possibleMoves(move);
    // end condition, don't think this is right... !!!
    if (move[0] == goal[0] && move[1] == goal[1]) {
        return move;
    }
    const moves = [];
    for (let i = 0; i<possibleMoves.length; i++) {
        const move = possibleMoves[i];
        // have to edit the board
        // have to call the recursion on edited board
        // have to remove the move
        // have to push the move into the moves array
    }
}