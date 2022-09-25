console.log(`knight`)

const knightMoves = (start, end) => {

}

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
console.log(createBoard());

// so i have an array with all the grid squares
// check to see if the move is on the board
const onTheBoard = (input) => {
    if (input[0] < 0 || input[0] > 7 || input[1] < 0 || input[1] > 7) {
        return false;
    } else {
        return true;
    }
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
        if (onTheBoard(index)) {
            return index;
        }
    })


    return filtered;
}
console.log(possibleMoves([0,0]));