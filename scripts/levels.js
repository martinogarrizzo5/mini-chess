// N.B! x and y cords are reversed

// level 1
function level1() {
  remainingMoves = 10;
  remainingMovesEl.innerHTML = "Remaining Moves: " + remainingMoves;

  // black pieces
  blackKing = new King(0, 0, "black");

  let pawn1 = new Pawn(1, 1, "black");
  let pawn2 = new Pawn(1, 1, "black");
  let pawn3 = new Pawn(1, 2, "black");

  grid[0][0].changePiece(blackKing);
  grid[1][0].changePiece(pawn1);
  grid[1][1].changePiece(pawn2);
  grid[1][2].changePiece(pawn3);

  // white pieces
  let queen = new Queen(4, 5, "white");
  let knight1 = new Knight(6, 3, "white");

  alleyPieces.push(queen, knight1);

  grid[4][5].changePiece(queen);
  grid[6][3].changePiece(knight1);
}
