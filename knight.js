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