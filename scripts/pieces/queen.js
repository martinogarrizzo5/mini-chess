class Queen extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);
    this.img = `<img src="./images/${color}-queen.png" alt="king" class="figure"></img>`;
  }

  // checkmate moves
  possibleMoves(grid) {
    const moves = [];
    moves.push(...this.possibleDiagonalMovement(grid));
    moves.push(...this.possibleAxisMovement(grid));

    return moves;
  }

  // real moves
  moves() {
    const moves = [];
    moves.push(...this.diagonalMovement(grid));
    moves.push(...this.axisMovement(grid));

    return moves;
  }
}
