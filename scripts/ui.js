// subtract a move from the remaining ones
function consumeMove() {
  remainingMoves--;
  remainingMovesEl.innerHTML = "Remaining Moves: " + remainingMoves;
  if (remainingMoves < 0) {
    console.log("You lost");
    isLevelLost = true;
    isLevelWon = false;

    showDefeatDialog();
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
    let isValidMove = lastSelectedCell.piece.moves(grid).find((move) => {
      return move[0] === selectedCell.x && move[1] === selectedCell.y;
    });

    // check if the move is a valid one of the chess piece
    if (isValidMove) {
      consumeMove();
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
        // don't do anything if the clicked cell has an enemy piece
        if (selectedCell.piece.color === "black") {
          selectedCell.clearCell(grid);
          selectedCell = null;
        } else {
          selectedCell.piece.markPossibleMoves(grid);
        }
      }
    }
  } else {
    // check if the user is trying to select another chess piece
    if (selectedCell && selectedCell.piece) {
      // don't do anything if the clicked cell has an enemy piece
      if (selectedCell.piece.color == "black") {
        selectedCell.clearCell(grid);
        selectedCell = null;
      } else {
        selectedCell.piece.markPossibleMoves(grid);
      }
    }
  }

  // show dialog to go to the next level if the player win
  isLevelWon = blackKing.computeCheckMate(alleyPieces);
  if (isLevelWon) {
    console.log("Level Won" + isLevelWon);
    showLevelWonDialog();
  } else if (remainingMoves <= 0) {
    console.log("Level Lost " + isLevelLost);
    showDefeatDialog();
  }
}

function showLevelWonDialog() {
  const backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");

  const dialog = document.createElement("div");
  dialog.classList.add("dialog");
  dialog.innerHTML = `
    <h2 class="finish-result">Victory...For Now!</h2>
    <p class="finish-description">You won but there are other levels to face</p>
    <button class="finish-button" onclick="goToNextLevel()">Next Level<button>
    `;

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
  <h2 class="finish-result">Loser!</h2>
  <p class="finish-description">It seems you are not as smart as I thought</p>
  <button class="finish-button" onclick="resetGame()">Try Again<button>
  `;

  const body = document.querySelector("body");
  body.appendChild(dialog);
  body.appendChild(backdrop);
}

function showGameWonDialog() {
  const backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");

  const dialog = document.createElement("div");
  dialog.classList.add("dialog");
  dialog.innerHTML = `
    <h2 class="finish-result">You are a real chess master!</h2>
    <p class="finish-description">You successfully finished all levels...but many other will come in the future</p>
    <button class="finish-button" onclick="resetGame()">Restart Game<button>
    `;

  const body = document.querySelector("body");
  body.appendChild(dialog);
  body.appendChild(backdrop);
}

// if game over then reset the game to initial point
function resetGame() {
  isLevelWon = false;
  isLevelLost = false;

  removeDialog();
  levelEl.innerText = "Level 1";
  level = 1;
  resetGrid();
  level1();
}

// if player win then go to next level
function goToNextLevel() {
  removeDialog();
  resetGrid();
  level++;
  if (level > levels.length) {
    showGameWonDialog();
  } else {
    levels[level - 1]();
    levelEl.innerText = "Level " + level;
  }
}

// remove dialog from screen
function removeDialog() {
  const body = document.querySelector("body");
  body.querySelector(".dialog").remove();
  body.querySelector(".backdrop").remove();
}
