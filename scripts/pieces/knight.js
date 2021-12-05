class Knigth extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);

    this.img = `<img src="./images/${color}-knight.png" alt="king" class="figure"></img>`;
  }

  possibleMoves(grid) {
    const moves = [
      [this.x + 1, this.y - 2],
      [this.x - 1, this.y - 2],
      [this.x + 1, this.y + 2],
      [this.x - 1, this.y + 2],
      [this.x + 2, this.y + 1],
      [this.x + 2, this.y - 1],
      [this.x - 2, this.y + 1],
      [this.x - 2, this.y - 1],
    ];

    return moves;
  }
}
