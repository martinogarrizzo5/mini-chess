// N.B! x and y cords are reversed

/* 
to create a level modify in the function the following properties:
  - remainining moves
  - html node of remaining moves
  - black pieces
  - white pieces
  - put reference of all pieces on the grid 
  - put reference of white pieces in alleyPieces 
*/

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

// level 2
function level2() {
  remainingMoves = 1;
  remainingMovesEl.innerHTML = "Remaining Moves: " + remainingMoves;

  // black pieces
  blackKing = new King(0, 7, "black");

  let pawn1 = new Pawn(1, 7, "black");
  let pawn2 = new Pawn(1, 6, "black");
  let pawn3 = new Pawn(1, 5, "black");

  grid[0][7].changePiece(blackKing);
  grid[1][7].changePiece(pawn1);
  grid[1][6].changePiece(pawn2);
  grid[1][5].changePiece(pawn3);

  // white pieces
  let queen = new Queen(4, 5, "white");
  let knight1 = new Knight(6, 3, "white");

  alleyPieces.push(queen, knight1);

  grid[4][5].changePiece(queen);
  grid[6][3].changePiece(knight1);
}

// level 3
function level3() {
  remainingMoves = 2;
  remainingMovesEl.innerHTML = "Remaining Moves: " + remainingMoves;

  // black pieces
  blackKing = new King(0, 7, "black");

  let pawn1 = new Pawn(1, 7, "black");
  let pawn2 = new Pawn(1, 6, "black");
  let pawn3 = new Pawn(1, 5, "black");

  grid[0][7].changePiece(blackKing);
  grid[1][7].changePiece(pawn1);
  grid[1][6].changePiece(pawn2);
  grid[1][5].changePiece(pawn3);

  // white pieces
  let rook = new Rook(4, 5, "white");
  let knight1 = new Knight(6, 3, "white");

  alleyPieces.push(rook, knight1);

  grid[4][5].changePiece(rook);
  grid[6][3].changePiece(knight1);
}

// level 4
function level4() {
  remainingMoves = 4;
  remainingMovesEl.innerHTML = "Remaining Moves: " + remainingMoves;

  // black pieces
  blackKing = new King(2, 7, "black");

  let pawn1 = new Pawn(3, 7, "black");
  let pawn2 = new Pawn(3, 6, "black");
  let pawn3 = new Pawn(3, 5, "black");

  let pawn4 = new Pawn(2, 3, "black");
  let pawn5 = new Pawn(3, 2, "black");
  let pawn6 = new Pawn(3, 5, "black");

  grid[2][7].changePiece(blackKing);
  grid[3][7].changePiece(pawn1);
  grid[3][6].changePiece(pawn2);
  grid[3][5].changePiece(pawn3);
  grid[2][3].changePiece(pawn4);
  grid[3][2].changePiece(pawn5);
  grid[3][5].changePiece(pawn6);

  // white pieces
  let rook1 = new Rook(4, 5, "white");
  let rook2 = new Rook(6, 1, "white");

  alleyPieces.push(rook1, rook2);

  grid[4][5].changePiece(rook1);
  grid[6][1].changePiece(rook2);
}

// level 5
function level5() {
  remainingMoves = 3;
  remainingMovesEl.innerHTML = "Remaining Moves: " + remainingMoves;

  // black pieces
  blackKing = new King(2, 7, "black");

  let pawn1 = new Pawn(3, 7, "black");
  let pawn2 = new Pawn(3, 6, "black");
  let pawn3 = new Pawn(3, 5, "black");

  let pawn4 = new Pawn(2, 3, "black");
  let pawn5 = new Pawn(3, 2, "black");
  let pawn6 = new Pawn(3, 5, "black");

  grid[2][7].changePiece(blackKing);
  grid[3][7].changePiece(pawn1);
  grid[3][6].changePiece(pawn2);
  grid[3][5].changePiece(pawn3);
  grid[2][3].changePiece(pawn4);
  grid[3][2].changePiece(pawn5);
  grid[3][5].changePiece(pawn6);

  // white pieces
  let rook1 = new Rook(4, 5, "white");
  let rook2 = new Rook(6, 1, "white");

  alleyPieces.push(rook1, rook2);

  grid[4][5].changePiece(rook1);
  grid[6][1].changePiece(rook2);
}

// level 5
function level6() {
  remainingMoves = 3;
  remainingMovesEl.innerHTML = "Remaining Moves: " + remainingMoves;

  // black pieces
  blackKing = new King(0, 1, "black");

  let pawn1 = new Pawn(3, 7, "black");
  let pawn2 = new Pawn(3, 6, "black");
  let pawn3 = new Pawn(3, 5, "black");

  let pawn4 = new Pawn(2, 3, "black");
  let pawn5 = new Pawn(3, 2, "black");
  let pawn6 = new Pawn(3, 5, "black");

  grid[0][1].changePiece(blackKing);
  grid[3][7].changePiece(pawn1);
  grid[3][6].changePiece(pawn2);
  grid[3][5].changePiece(pawn3);
  grid[2][3].changePiece(pawn4);
  grid[3][2].changePiece(pawn5);
  grid[3][5].changePiece(pawn6);

  // white pieces
  let bishop1 = new Bishop(5, 5, "white");
  let rook2 = new Rook(6, 1, "white");
  let rook1 = new Rook(4, 4, "white");

  alleyPieces.push(rook1, rook2);

  grid[4][4].changePiece(rook1);
  grid[6][1].changePiece(rook2);
  grid[5][5].changePiece(bishop1);
}
