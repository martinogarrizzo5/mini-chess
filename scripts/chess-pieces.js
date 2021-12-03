class Pedone extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);
    this.img = `<img src="./images/${color}-pawn.png" alt="pedone" class="figure"></img>`;
  }

  // TODO: solve trouble with front move that eliminate enemy piece
  possibleMoves(grid) {
    let moves = [[this.x, this.y - 1]];

    if (this.isInGridBounds([this.x + 1, this.y - 1])) {
      if (
        grid[this.y - 1][this.x + 1].piece &&
        grid[this.y - 1][this.x + 1].piece.color != this.color
      ) {
        moves.push([this.x + 1, this.y - 1]);
      }
    }

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

class King extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);

    // TODO: change image based on color
    this.img = `<img src="./images/${color}-king.png" alt="king" class="figure"></img>`;
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
}

class Bishop extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);
    this.img = `<img src="./images/${color}-bishop.png" alt="king" class="figure"></img>`;
  }
}
