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

// re-create the grid when the level finishes
function resetGrid() {
  lastSelectedCell = null;
  selectedCell = null;

  grid = [];
  gridEl.innerHTML = "";
  blackKing = null;

  createGrid();
  loadDOMGrid();
}
