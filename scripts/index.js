const grid = [];
const gridEl = document.querySelector(".chess-grid");

let lastSelectedCell = null; // last move made
let selectedCell = null; // actual selected cell
// let selectedPiece = null; // piece on selected cell
let isValidMove = true; // check if move is valid

createGrid();
loadGrid();
console.log(grid);

grid[1][2].changePiece(new King(1, 2, "white"));
grid[6][0].changePiece(new Pedone(6, 0, "white"));
grid[3][2].changePiece(new King(3, 2, "white"));
