class Pawn extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);
    this.img = `<img src="./images/${color}-pawn.png" alt="pedone" class="figure"></img>`;
  }

  possibleMoves(grid) {
    let moves = [];

    // pawn can move forward only if there is no piece in front
    if (this.color === "white") {
      if (this.isInGridBounds([this.x, this.y - 1])) {
        if (!grid[this.y - 1][this.x].piece) {
          moves.push([this.x, this.y - 1]);
        }
      }
    } else {
      if (this.isInGridBounds([this.x, this.y + 1])) {
        if (!grid[this.y + 1][this.x].piece) {
          moves.push([this.x, this.y + 1]);
        }
      }
    }

    let whiteDiagonals = [
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y - 1],
    ];

    let blackDiagonals = [
      [this.x - 1, this.y + 1],
      [this.x + 1, this.y + 1],
    ];

    let diagonalMoves =
      this.color === "white" ? whiteDiagonals : blackDiagonals;
    for (let move of diagonalMoves) {
      if (this.isInGridBounds(move)) {
        if (
          grid[move[1]][move[0]].piece &&
          grid[move[1]][move[0]].piece.color != this.color
        ) {
          moves.push(move);
        }
      }
    }

    return moves;
  }
}
