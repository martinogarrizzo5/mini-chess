class Pawn extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);
    this.img = `<img src="../images/${color}-pawn.png" alt="pedone" class="figure"></img>`;
  }

  possibleMoves(grid) {
    let moves = [];

    // pawn can move forward only if there is no piece in front
    if (this.isInGridBounds([this.x, this.y - 1])) {
      if (!grid[this.y - 1][this.x].piece) {
        moves.push([this.x, this.y - 1]);
      }
    }

    // right diagonal eat
    if (this.isInGridBounds([this.x + 1, this.y - 1])) {
      if (
        grid[this.y - 1][this.x + 1].piece &&
        grid[this.y - 1][this.x + 1].piece.color != this.color
      ) {
        moves.push([this.x + 1, this.y - 1]);
      }
    }

    // left diagonal eat
    if (this.isInGridBounds([this.x - 1, this.y - 1])) {
      if (
        grid[this.y - 1][this.x - 1].piece &&
        grid[this.y - 1][this.x - 1].piece.color != this.color
      ) {
        moves.push([this.x - 1, this.y - 1]);
      }
    }

    return moves;
  }
}
