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
  computeCheckMate(enemyPieces, alleyPieces) {
    let kingPositions = [[this.x, this.y]];

    // base king positions
    for (let i = this.y - 1; i <= this.y + 1; i++) {
      for (let j = this.x - 1; j <= this.x + 1; j++) {
        if (this.checkValidMove([j, i])) {
          kingPositions.push([j, i]);
        }
      }
    }

    for (let enemy of enemyPieces) {
      // check if enemy is eatable
      let isEnemyEatable = false;
      let i = 0;
      while (i < alleyPieces.length && !isEnemyEatable) {
        // don't calculate this on king pieces
        if (!(alleyPieces[i] instanceof King)) {
          const moves = alleyPieces[i].possibleMoves(grid);
          let j = 0;
          while (j < moves.length && !isEnemyEatable) {
            if (moves[j][1] === enemy.y && moves[j][0] === enemy.x) {
              isEnemyEatable = true;
              console.log("[+] enemy eatable");
            }
            j++;
          }
        }
        i++;
      }

      // don't consider any eatable enemy piece when computing checkmate
      if (!isEnemyEatable) {
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
    }

    console.log("King can move on: ");
    console.log(kingPositions);
    return kingPositions.length === 0;
  }
}
