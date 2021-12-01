class Pedone extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);
    this.img = `<img src="./images/${color}-pawn.png" alt="pedone" class="figure"></img>`;
  }

  possibleMoves(grid) {
    let moves = [[this.x, this.y - 1]];
    console.log(this.y - 1);
    if (grid[this.y - 1][this.x + 1] && grid[this.y - 1][this.x + 1].piece) {
      moves.push([this.x + 1, this.y - 1]);
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
