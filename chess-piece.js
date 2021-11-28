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

  markPossibleMoves(grid) {
    const moves = selectedCell.piece.moves();
    for (let move of moves) {
      if (this.isValidMove(move) == true) {
        let cell = grid[move[1]][move[0]];
        cell.markRed();
      }
    }
  }

  cleanMarkedCells(grid) {
    let moves = this.moves();
    for (let move of moves) {
      if (this.isValidMove(move)) {
        let cell = grid[move[1]][move[0]];
        cell.cleanColor();
      }
    }
  }

  isValidMove(move) {
    let isValid = false;
    if (move[1] >= 0 && move[1] < 8 && move[0] >= 0 && move[0] < 8) {
      isValid = true;
    }

    return isValid;
  }
}
