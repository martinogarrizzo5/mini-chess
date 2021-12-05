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

// LEVEL 1
// TODO: create container for the reference of pieces of each color

// black pieces
grid[0][0].changePiece(new King(1, 1, "black"));
grid[1][0].changePiece(new Pawn(1, 1, "black"));
grid[1][1].changePiece(new Pawn(1, 1, "black"));
grid[1][2].changePiece(new Pawn(1, 2, "black"));

// white pieces
grid[4][5].changePiece(new Queen(4, 5, "white"));
grid[6][3].changePiece(new Knigth(6, 3, "white"));
