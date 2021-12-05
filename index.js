class ChessPiece {
  x;
  y;
  img;
  color;
  possibleMoves(grid) {
    return [];
  }
  constructor(y, x, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }
  markPossibleMoves(grid) {
    let moves = this.moves(grid);
    for (let move of moves) {
      let cell = grid[move[1]][move[0]];
      cell.markRed();
    }
  }
  cleanMarkedCells(grid) {
    let moves = this.moves(grid);
    for (let move of moves) {
      let cell = grid[move[1]][move[0]];
      cell.cleanColor();
    }
  }
  isInGridBounds(move) {
    let isValid = false;
    if (move[1] >= 0 && move[1] < 8 && move[0] >= 0 && move[0] < 8) {
      isValid = true;
    }
    return isValid;
  }
  changeCords(y, x) {
    this.y = y;
    this.x = x;
  }
  checkValidMove(move) {
    let isValid = false;
    if (this.isInGridBounds(move)) {
      if (
        !grid[move[1]][move[0]].piece ||
        (grid[move[1]][move[0]].piece &&
          grid[move[1]][move[0]].piece.color != this.color)
      ) {
        isValid = true;
      }
    }
    return isValid;
  }
  moves(grid) {
    let moves = this.possibleMoves(grid);
    moves = moves.filter((move) => this.checkValidMove(move));
    return moves;
  }
  diagonalMovement(grid) {
    const moves = [];
    let i = this.y + 1;
    let j = this.x + 1;
    while (this.isInGridBounds([j, i]) && this.checkValidMove([j, i])) {
      moves.push([j, i]);
      if (grid[i][j].piece && grid[i][j].piece.color != this.color) {
        break;
      }
      i++;
      j++;
    }
    i = this.y + 1;
    j = this.x - 1;
    while (this.isInGridBounds([j, i]) && this.checkValidMove([j, i])) {
      moves.push([j, i]);
      if (grid[i][j].piece && grid[i][j].piece.color != this.color) {
        break;
      }
      i++;
      j--;
    }
    i = this.y - 1;
    j = this.x + 1;
    while (this.isInGridBounds([j, i]) && this.checkValidMove([j, i])) {
      moves.push([j, i]);
      if (grid[i][j].piece && grid[i][j].piece.color != this.color) {
        break;
      }
      i--;
      j++;
    }
    i = this.y - 1;
    j = this.x - 1;
    while (this.isInGridBounds([j, i]) && this.checkValidMove([j, i])) {
      moves.push([j, i]);
      if (grid[i][j].piece && grid[i][j].piece.color != this.color) {
        break;
      }
      i--;
      j--;
    }
    return moves;
  }
  axisMovement(grid) {
    const moves = [];
    let i = this.y - 1;
    let j = this.x;
    while (this.isInGridBounds([j, i]) && this.checkValidMove([j, i])) {
      moves.push([j, i]);
      if (grid[i][j].piece && grid[i][j].piece.color != this.color) {
        break;
      }
      i--;
    }
    i = this.y + 1;
    j = this.x;
    while (this.isInGridBounds([j, i]) && this.checkValidMove([j, i])) {
      moves.push([j, i]);
      if (grid[i][j].piece && grid[i][j].piece.color != this.color) {
        break;
      }
      i++;
    }
    i = this.y;
    j = this.x - 1;
    while (this.isInGridBounds([j, i]) && this.checkValidMove([j, i])) {
      moves.push([j, i]);
      if (grid[i][j].piece && grid[i][j].piece.color != this.color) {
        break;
      }
      j--;
    }
    i = this.y;
    j = this.x + 1;
    while (this.isInGridBounds([j, i]) && this.checkValidMove([j, i])) {
      moves.push([j, i]);
      if (grid[i][j].piece && grid[i][j].piece.color != this.color) {
        break;
      }
      j++;
    }
    return moves;
  }
}
class Bishop extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);
    this.img = `<img src="./images/${color}-bishop.png" alt="king" class="figure"></img>`;
  }
  possibleMoves(grid) {
    const moves = [];
    moves.push(...this.diagonalMovement(grid));
    return moves;
  }
}
class King extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);
    this.img = `<img src="./images/${color}-king.png" alt="king" class="figure"></img>`;
  }
  possibleMoves(grid) {
    return [
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x + 1, this.y + 1],
      [this.x - 1, this.y - 1],
      [this.x, this.y + 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y + 1],
    ];
  }
  computeCheckMate(enemyPieces) {}
}
class Knigth extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);
    this.img = `<img src="./images/${color}-knight.png" alt="king" class="figure"></img>`;
  }
  possibleMoves(grid) {
    const moves = [
      [this.x + 1, this.y - 2],
      [this.x - 1, this.y - 2],
      [this.x + 1, this.y + 2],
      [this.x - 1, this.y + 2],
      [this.x + 2, this.y + 1],
      [this.x + 2, this.y - 1],
      [this.x - 2, this.y + 1],
      [this.x - 2, this.y - 1],
    ];
    return moves;
  }
}
class Pawn extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);
    this.img = `<img src="./images/${color}-pawn.png" alt="pedone" class="figure"></img>`;
  }
  possibleMoves(grid) {
    let moves = [];
    if (this.isInGridBounds([this.x, this.y - 1])) {
      if (!grid[this.y - 1][this.x].piece) {
        moves.push([this.x, this.y - 1]);
      }
    }
    if (this.isInGridBounds([this.x + 1, this.y - 1])) {
      if (
        grid[this.y - 1][this.x + 1].piece &&
        grid[this.y - 1][this.x + 1].piece.color != this.color
      ) {
        moves.push([this.x + 1, this.y - 1]);
      }
    }
    if (this.isInGridBounds([this.x - 1, this.y - 1])) {
      if (
        grid[this.y - 1][this.x - 1].piece &&
        grid[this.y - 1][this.x - 1].piece.color != this.color
      ) {
        moves.push([this.x - 1, this.y - 1]);
      }
    }
    return moves;
  }
}
class Queen extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);
    this.img = `<img src="./images/${color}-queen.png" alt="king" class="figure"></img>`;
  }
  possibleMoves(grid) {
    const moves = [];
    moves.push(...this.diagonalMovement(grid));
    moves.push(...this.axisMovement(grid));
    return moves;
  }
}
class Rook extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);
    this.img = `<img src="./images/${color}-rook.png" alt="king" class="figure"></img>`;
  }
  possibleMoves(grid) {
    const moves = [];
    moves.push(...this.axisMovement(grid));
    return moves;
  }
}
function createGrid() {
  let isLastWhite = false;
  let brown = "#643528";
  let cellColor;
  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      cellColor = isLastWhite ? "white" : brown;
      const cell = new GridCell(j, i, null, cellColor);
      row.push(cell);
      isLastWhite = !isLastWhite;
    }
    grid.push(row);
    isLastWhite = !isLastWhite;
  }
}
function loadDOMGrid() {
  gridEl.innerHTML = "";
  for (let y = 0; y < grid.length; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < grid[y].length; x++) {
      const cell = document.createElement("td");
      cell.x = x;
      cell.y = y;
      cell.addEventListener("click", handleCellClick);
      grid[y][x].htmlNode = cell;
      cell.style.backgroundColor = grid[y][x].color;
      row.append(cell);
    }
    gridEl.append(row);
  }
}
function resetGrid() {
  lastSelectedCell = null;
  selectedCell = null;
  grid = [];
  gridEl.innerHTML = "";
  createGrid();
  loadDOMGrid();
}
class GridCell {
  htmlNode;
  color;
  x;
  y;
  piece;
  constructor(x, y, htmlNode, color) {
    this.x = x;
    this.y = y;
    this.htmlNode = htmlNode;
    this.color = color;
  }
  changePiece(piece) {
    if (!piece) {
      this.htmlNode.innerHTML = "";
      this.piece = null;
    } else {
      this.htmlNode.innerHTML = piece.img;
      this.piece = piece;
    }
  }
  highlight() {
    const highlightColor = "yellow";
    this.htmlNode.style.backgroundColor = highlightColor;
  }
  deHighlight() {
    this.htmlNode.style.backgroundColor = this.color;
  }
  markRed() {
    this.htmlNode.style.backgroundColor = "#ffda00";
  }
  cleanColor() {
    this.htmlNode.style.backgroundColor = this.color;
  }
  clearCell(grid) {
    if (this.piece) {
      this.piece.cleanMarkedCells(grid);
    }
    this.deHighlight();
  }
}
let grid = [];
const gridEl = document.querySelector(".chess-grid");
const remainingMovesEl = document.querySelector(".remaining-moves");
const levelEl = document.querySelector(".level");
let level = 1;
let isLevelWon = false;
let isLevelLost = false;
let remainingMoves = 0;
let lastSelectedCell = null;
let selectedCell = null;
createGrid();
loadDOMGrid();
let alleyPieces = [];
level1();
function level1() {
  remainingMoves = 3;
  remainingMovesEl.innerHTML = "Remaining Moves: " + remainingMoves;
  resetGrid();
  grid[0][0].changePiece(new King(1, 1, "black"));
  grid[1][0].changePiece(new Pawn(1, 1, "black"));
  grid[1][1].changePiece(new Pawn(1, 1, "black"));
  grid[1][2].changePiece(new Pawn(1, 2, "black"));
  grid[4][5].changePiece(new Queen(4, 5, "white"));
  grid[6][3].changePiece(new Knigth(6, 3, "white"));
}
function consumeMove() {
  remainingMoves--;
  remainingMovesEl.innerHTML = "Remaining Moves: " + remainingMoves;
  if (remainingMoves <= 0) {
    console.log("You lost");
    isLevelLost = true;
    isLevelWon = false;
    showDefeatDialog();
  }
}
function handleCellClick(event) {
  lastSelectedCell = selectedCell;
  selectedCell = grid[event.target.y][event.target.x];
  if (lastSelectedCell === selectedCell) {
    if (selectedCell.piece) {
      selectedCell.piece.cleanMarkedCells(grid);
    }
    selectedCell.deHighlight();
    selectedCell = null;
    lastSelectedCell = null;
    return;
  }
  if (lastSelectedCell) {
    lastSelectedCell.clearCell(grid);
  }
  selectedCell.highlight();
  if (lastSelectedCell && lastSelectedCell.piece) {
    let isValidMove = lastSelectedCell.piece.moves(grid).find((move) => {
      return move[0] === selectedCell.x && move[1] === selectedCell.y;
    });
    if (isValidMove) {
      consumeMove();
      lastSelectedCell.clearCell(grid);
      selectedCell.changePiece(lastSelectedCell.piece);
      lastSelectedCell.changePiece(null);
      selectedCell.piece.changeCords(selectedCell.y, selectedCell.x);
      selectedCell = null;
      lastSelectedCell = null;
    } else {
      if (selectedCell && selectedCell.piece) {
        if (selectedCell.piece.color === "black") {
          selectedCell.clearCell(grid);
          selectedCell = null;
        } else {
          selectedCell.piece.markPossibleMoves(grid);
        }
      }
    }
  } else {
    if (selectedCell && selectedCell.piece) {
      if (selectedCell.piece.color == "black") {
        selectedCell.clearCell(grid);
        selectedCell = null;
      } else {
        selectedCell.piece.markPossibleMoves(grid);
      }
    }
  }
}
function showVictoryDialog() {
  const backdrop = document.createElement("div");
  const dialog = document.createElement("div");
  const body = document.querySelector("body");
  body.appendChild(dialog);
  body.appendChild(backdrop);
}
function showDefeatDialog() {
  const backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");
  const dialog = document.createElement("div");
  dialog.classList.add("dialog");
  dialog.innerHTML = `
  <h2 class="finish-result">You Lost!</h2>
  <p class="finish-description">It seems you are not as smart as I thought</p>
  <button class="finish-button" onclick="resetGame()">Try again<button>
  `;
  const body = document.querySelector("body");
  body.appendChild(dialog);
  body.appendChild(backdrop);
}
function resetGame() {
  const body = document.querySelector("body");
  body.querySelector(".dialog").remove();
  body.querySelector(".backdrop").remove();
  levelEl.innerText = "Level 1";
  level = 1;
  level1();
}
