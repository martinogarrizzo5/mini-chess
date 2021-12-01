class Pedone extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);
    this.img = `<img src="./images/pedone.png" alt="pedone" class="figure"></img>`;
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
  constructor(y, x, color) {
    super(y, x, color);

    // TODO: change image based on color
    this.img = `<img src="./images/king.png" alt="king" class="figure"></img>`;
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
