class King extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);

    this.img = `<img src="../images/${color}-king.png" alt="king" class="figure"></img>`;
  }

  possibleMoves(grid) {
    return [
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x + 1, this.y + 1],
      [this.x - 1, this.y - 1],
      [this.x, this.y + 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y + 1],
    ];
  }

  // verify position of checkmate
  computeCheckMate(enemyPieces) {
    // TODO: take all pieces of other color and see if their moves overlaps with king moves
    // TODO: check if the cells around contain alley pieces where the king can't move
  }
}
