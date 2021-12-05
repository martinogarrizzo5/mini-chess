class Bishop extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);
    this.img = `<img src="../images/${color}-bishop.png" alt="king" class="figure"></img>`;
  }

  possibleMoves(grid) {
    const moves = [];
    moves.push(...this.diagonalMovement(grid));

    return moves;
  }
}
