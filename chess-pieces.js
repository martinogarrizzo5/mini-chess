class Pedone extends ChessPiece {
  img = `<img src="./images/pedone.png" alt="pedone" class="figure"></img>`;

  constructor(y, x, color) {
    super(y, x, color);
  }

  moves() {
    return [[this.x, this.y - 1]];
  }

  specialMove() {
    return [
      [this.x - 1, this.y - 1],
      [this.x + 1, this.y - 1],
    ];
  }
}

class King extends ChessPiece {
  img = `<img src="./images/king.png" alt="king" class="figure"></img>`;

  constructor(y, x, color) {
    super(y, x, color);
  }

  moves() {
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
