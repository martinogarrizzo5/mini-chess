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

  // mark the cells where the piece can move
  markPossibleMoves(grid) {
    let moves = selectedCell.piece.moves(grid);

    for (let move of moves) {
      let cell = grid[move[1]][move[0]];
      cell.markRed();
    }
  }

  // remove cells' highlight where the piece can move
  cleanMarkedCells(grid) {
    let moves = this.moves(grid);
    for (let move of moves) {
      let cell = grid[move[1]][move[0]];
      cell.cleanColor();
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

  // updates cords
  changeCords(y, x) {
    this.y = y;
    this.x = x;
  }

  // check if the move is valid or on enemy piece
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

  // filter the possible moves taking only the valid ones
  moves(grid) {
    let moves = this.possibleMoves(grid);
    moves = moves.filter((move) => this.checkValidMove(move));
    return moves;
  }
}
