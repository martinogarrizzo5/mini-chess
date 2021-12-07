class Rook extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);
    this.img = `<img src="./images/${color}-rook.png" alt="king" class="figure"></img>`;
  }

  // checkmate moves
  possibleMoves(grid) {
    const moves = [];
    moves.push(...this.possibleAxisMovement(grid));

    return moves;
  }

  // real moves
  moves(grid) {
    const moves = [];
    moves.push(...this.axisMovement(grid));

    return moves;
  }
}
