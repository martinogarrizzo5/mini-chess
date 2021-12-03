// create js grid
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

    // start new line with opposite color
    isLastWhite = !isLastWhite;
  }
}

// UI interaction
function handleCellClick(event) {
  // update last selected cell
  lastSelectedCell = selectedCell;
  // update js selected cell
  selectedCell = grid[event.target.y][event.target.x];

  // handle same cell click
  if (lastSelectedCell === selectedCell) {
    if (selectedCell.piece) {
      selectedCell.piece.cleanMarkedCells(grid);
    }
    // turn to starting position
    selectedCell.deHighlight();
    selectedCell = null;
    lastSelectedCell = null;
    return;
  }

  // clean last selected cell and marked moves
  if (lastSelectedCell) {
    lastSelectedCell.clearCell(grid);
  }

  // highlight selected cell
  selectedCell.highlight();

  // move piece if it was on the last selected cell
  if (lastSelectedCell && lastSelectedCell.piece) {
    isValidMove = lastSelectedCell.piece.moves(grid).find((move) => {
      return move[0] === selectedCell.x && move[1] === selectedCell.y;
    });

    // check if the move is a valid one of the chess piece
    if (isValidMove) {
      // clean last selected cell
      lastSelectedCell.clearCell(grid);
      // move on new selected cell
      selectedCell.changePiece(lastSelectedCell.piece);
      lastSelectedCell.changePiece(null);

      // update piece's cords reference
      selectedCell.piece.changeCords(selectedCell.y, selectedCell.x);

      // turn to starting point
      selectedCell = null;
      lastSelectedCell = null;
    } else {
      // check if the user is trying to select another chess piece
      if (selectedCell && selectedCell.piece) {
        selectedCell.piece.markPossibleMoves(grid);
      }
    }
  } else {
    // check if the user is trying to select another chess piece
    if (selectedCell && selectedCell.piece) {
      selectedCell.piece.markPossibleMoves(grid);
    }
  }
}

// load grid in the DOM adding reference to the js grid
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
