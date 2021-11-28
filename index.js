const grid = [];
const gridEl = document.querySelector(".chess-grid");
let selectedCell = null;
let selectedPiece = null;

createGrid();
loadGrid();
console.log(grid);

function createGrid() {
  let isLastWhite = false;
  for (let i = 0; i < 8; i++) {
    const row = [];
    for (let j = 0; j < 8; j++) {
      const cell = new GridCell(i, j, null, isLastWhite ? "white" : "black");
      row.push(cell);
      isLastWhite = !isLastWhite;
    }

    grid.push(row);
    isLastWhite = !isLastWhite;
  }
}

function handleCellClick(event) {
  if (selectedCell) {
    selectedCell.deHighlight();
    if (selectedCell.piece) {
      selectedCell.piece.cleanMarkedCells(grid);
      selectedCell.changePiece(null);
    } else {
      selectedPiece = null;
    }
  }

  const newCellEl = event.target;
  // update js selected cell
  selectedCell = grid[newCellEl.y][newCellEl.x];
  selectedCell.highlight();

  // move piece
  if (selectedPiece) {
    const isValidMove = selectedPiece.moves().find((move) => {
      return move[0] === selectedCell.x;
    });

    console.log(isValidMove);
    if (isValidMove) {
      selectedCell.changePiece(selectedPiece);
      selectedPiece.x = selectedCell.y;
      selectedPiece.y = selectedCell.x;

      selectedCell.piece.cleanMarkedCells(grid);
      selectedCell.deHighlight();

      selectedCell = null;
      selectedPiece = null;
    }
  }

  if (selectedCell && selectedCell.piece) {
    selectedPiece = selectedCell.piece;
  }
  if (selectedCell && selectedCell.piece) {
    // show possible moves
    selectedCell.piece.markPossibleMoves(grid);
  }
}

// load grid in the DOM adding reference to the js grid
function loadGrid() {
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

grid[1][2].changePiece(new King(1, 2, "white"));
grid[6][0].changePiece(new Pedone(6, 0, "white"));
grid[3][2].changePiece(new King(3, 2, "white"));
