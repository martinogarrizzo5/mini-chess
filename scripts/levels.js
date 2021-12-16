// N.B! x and y cords are reversed

function putPieces(...pieces) {
  for (let piece of pieces) {
    grid[piece.y][piece.x].changePiece(piece);

    if (piece.color === "white") {
      alleyPieces.push(piece);
    } else {
      enemyPieces.push(piece);
    }
  }
}

function setMovesNumber(movesNumber) {
  remainingMoves = movesNumber;
  remainingMovesEl.innerHTML = "Remaining Moves: " + movesNumber;
}

// level 1
function level1() {
  setMovesNumber(3);

  // black pieces
  blackKing = new King(0, 0, "black");

  putPieces(
    blackKing,
    new Pawn(1, 0, "black"),
    new Pawn(1, 1, "black"),
    new Pawn(1, 2, "black")
  );

  // white pieces
  putPieces(new Queen(4, 5, "white"), new Knight(6, 3, "white"));
}

// level 2
function level2() {
  setMovesNumber(1);

  // black pieces
  blackKing = new King(0, 7, "black");

  putPieces(
    blackKing,
    new Pawn(1, 7, "black"),
    new Pawn(1, 6, "black"),
    new Pawn(1, 5, "black")
  );

  // white pieces
  putPieces(new Queen(4, 5, "white"), new Knight(6, 3, "white"));
}

// level 3
function level3() {
  setMovesNumber(2);

  // black pieces
  blackKing = new King(0, 7, "black");

  putPieces(
    blackKing,
    new Pawn(1, 7, "black"),
    new Pawn(1, 6, "black"),
    new Pawn(1, 5, "black")
  );

  // white pieces
  putPieces(new Rook(4, 5, "white"), new Knight(6, 3, "white"));
}

// level 4
function level4() {
  setMovesNumber(3);

  // black pieces
  blackKing = new King(2, 7, "black");

  putPieces(
    blackKing,
    new Pawn(3, 7, "black"),
    new Pawn(3, 6, "black"),
    new Pawn(3, 5, "black"),
    new Pawn(2, 3, "black"),
    new Pawn(3, 2, "black"),
    new Pawn(3, 5, "black")
  );

  // white pieces
  putPieces(new Rook(4, 5, "white"), new Rook(6, 1, "white"));
}

// level 5
function level5() {
  setMovesNumber(3);

  // black pieces
  blackKing = new King(0, 0, "black");

  putPieces(
    blackKing,
    new Pawn(1, 1, "black"),
    new Pawn(1, 0, "black"),
    new Rook(0, 1, "black")
  );

  // white pieces
  putPieces(new Rook(4, 5, "white"), new Knight(6, 3, "white"));
}

// level 6
function level6() {
  setMovesNumber(2);

  // black pieces
  blackKing = new King(0, 1, "black");

  putPieces(
    blackKing,
    new Pawn(4, 2, "black"),
    new Pawn(3, 6, "black"),
    new Pawn(3, 5, "black"),
    new Pawn(2, 3, "black"),
    new Pawn(3, 2, "black")
  );

  // white pieces
  putPieces(
    new Bishop(5, 5, "white"),
    new Rook(6, 1, "white"),
    new Rook(4, 4, "white")
  );
}

// level 7
function level7() {
  setMovesNumber(3);

  // black pieces
  blackKing = new King(2, 4, "black");

  putPieces(
    blackKing,
    new Pawn(1, 4, "black"),
    new Pawn(4, 2, "black"),
    new Pawn(1, 3, "black"),
    new Pawn(3, 5, "black"),
    new Pawn(2, 3, "black"),
    new Pawn(3, 2, "black"),
    new Pawn(2, 5, "black")
  );

  // white pieces
  putPieces(new Bishop(5, 5, "white"), new Bishop(7, 2, "white"));
}
