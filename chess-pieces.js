class Pedone extends ChessPiece {
  img = `<img src="./images/pedone.png" alt="pedone" class="figure"></img>`;

  constructor(color) {
    super();
    this.color = color;
  }

  move() {}

  isValidMove(x, y) {
    let isValid = false;
    if (x == this.x && y == this.y + 1) {
      isValid = true;
    }

    return isValid;
  }
}

class King extends ChessPiece {
  img = `<img src="./images/king.png" alt="king" class="figure"></img>`;

  constructor(y, x, color) {
    super(y, x, color);
  }

  isValidMove(x, y) {
    // can't move on same cell
    if (this.x == x && this.y == y) {
      return false;
    }
    if (this.x <= x <= this.x + 1 && this.y <= y <= this.y + 1) {
      return true;
    }
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
