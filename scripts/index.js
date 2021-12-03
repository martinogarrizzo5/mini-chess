const grid = [];
const gridEl = document.querySelector(".chess-grid");

let lastSelectedCell = null; // last move made
let selectedCell = null; // actual selected cell
// let selectedPiece = null; // piece on selected cell
let isValidMove = true; // check if move is valid

createGrid();
loadDOMGrid();
console.log(grid);

// N.B! x and y cords are reversed
grid[1][1].changePiece(new King(1, 1, "black"));
grid[6][0].changePiece(new Pedone(6, 0, "white"));
grid[3][2].changePiece(new King(3, 2, "white"));
grid[4][5].changePiece(new Bishop(4, 5, "white"));
