class King extends ChessPiece {
  constructor(y, x, color) {
    super(y, x, color);

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

  // verify position of checkmate
  computeCheckMate(enemyPieces) {
    let kingPositions = [[this.x, this.y]];

    for (let i = this.y - 1; i <= this.y + 1; i++) {
      for (let j = this.x - 1; j <= this.x + 1; j++) {
        if (this.checkValidMove([j, i])) {
          kingPositions.push([j, i]);
        }
      }
    }

    console.log(kingPositions);
    for (let enemy of enemyPieces) {
      // TODO: solve bug with movement on diagonals and axis
      const moves = enemy.possibleMoves(grid);
      for (let move of moves) {
        if (
          move[0] >= this.x - 1 &&
          move[0] <= this.x + 1 &&
          move[1] >= this.y - 1 &&
          move[1] <= this.y + 1
        ) {
          kingPositions = kingPositions.filter(
            (pos) => pos[0] != move[0] || pos[1] != move[1]
          );
        }
      }
    }
    console.log(kingPositions);
    return kingPositions.length === 0;
  }
}
