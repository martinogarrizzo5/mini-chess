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
let enemyPieces = [];
let levels = [level1, level2, level3, level4, level5, level6, level7];

// createGrid();
// loadDOMGrid();
// console.log(grid);

// levels[level - 1]();
showIntroScreen();
