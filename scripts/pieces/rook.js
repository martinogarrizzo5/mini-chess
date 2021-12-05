class Rook extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);
    this.img = `<img src="../images/${color}-rook.png" alt="king" class="figure"></img>`;
  }

  possibleMoves(grid) {
    const moves = [];
    moves.push(...this.axisMovement(grid));

    return moves;
  }
}
