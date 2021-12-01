class ChessPiece {
  x;
  y;
  img;
  moves() {}
  move() {}
  color;

  constructor(y, x, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  // mark the cells where the piece can move
  markPossibleMoves(grid) {
    const moves = selectedCell.piece.moves();
    for (let move of moves) {
      if (this.isInGridBounds(move) == true) {
        let cell = grid[move[1]][move[0]];
        cell.markRed();
      }
    }
  }

  // remove cells' highlight where the piece can move
  cleanMarkedCells(grid) {
    let moves = this.moves();
    for (let move of moves) {
      if (this.isInGridBounds(move)) {
        let cell = grid[move[1]][move[0]];
        cell.cleanColor();
      }
    }
  }

  // check if the move is pointing to an existent cell
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
}
