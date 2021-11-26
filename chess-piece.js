class ChessPiece {
  x;
  y;
  img;
  moves() {}
  move() {}
  isValidMove() {}
  color;

  constructor(y, x, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  markPossibleMoves(grid) {
    const moves = selectedCell.piece.moves();
    console.log(moves);
    for (let move of moves) {
      console.log(move);
      let cell = grid[move[1]][move[0]];
      cell.markRed();
    }
  }

  cleanMarkedCells(grid) {
    let moves = this.moves();
    for (let move of moves) {
      console.log(move);
      let cell = grid[move[1]][move[0]];
      cell.cleanColor();
    }
  }
}
