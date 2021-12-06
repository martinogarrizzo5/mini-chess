let grid = [];
const gridEl = document.querySelector(".chess-grid");
const remainingMovesEl = document.querySelector(".remaining-moves");
const levelEl = document.querySelector(".level");

let level = 1;
let isLevelWon = false;
let isLevelLost = false;
let remainingMoves = 0; // remaining moves to checkmate enemy king

let lastSelectedCell = null; // last move made
let selectedCell = null; // actual selected cell

let blackKing; // enemy king
let alleyPieces = [];

createGrid();
loadDOMGrid();
console.log(grid);

// TODO: ADD INTRODUCTORY SCREEN TO EXPLAIN THE GOAL OF THE GAME
let levels = [level1, level2, level3, level4, level5];
levels[level - 1]();
