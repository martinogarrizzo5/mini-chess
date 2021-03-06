class ChessPiece {
  id;
  x;
  y;
  img;
  color;
  possibleMoves(grid) {
    return [];
  }

  constructor(y, x, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.id = Math.random() + "-" + Math.random();
  }

  // mark the cells where the piece can move
  markPossibleMoves(grid) {
    let moves = this.moves(grid);

    for (let move of moves) {
      let cell = grid[move[1]][move[0]];
      cell.markRed();
    }
  }

  // remove cells' highlight where the piece can move
  cleanMarkedCells(grid) {
    let moves = this.moves(grid);
    for (let move of moves) {
      let cell = grid[move[1]][move[0]];
      cell.cleanColor();
    }
  }

  // check if the move is pointing to an existent cell
  isInGridBounds(move) {
    let isValid = false;
    if (move[1] >= 0 && move[1] < 8 && move[0] >= 0 && move[0] < 8) {
      isValid = true;
    }

    return isValid;
  }

  // updates cords
  changeCords(y, x) {
    this.y = y;
    this.x = x;
  }

  // check if the move is on empty cell or on enemy piece
  checkValidMove(move) {
    let isValid = false;

    if (this.isInGridBounds(move)) {
      if (
        !grid[move[1]][move[0]].piece ||
        (grid[move[1]][move[0]].piece &&
          grid[move[1]][move[0]].piece.color != this.color)
      ) {
        isValid = true;
      }
    }

    return isValid;
  }

  // filter the possible moves taking only the valid ones
  moves(grid) {
    let moves = this.possibleMoves(grid);
    moves = moves.filter(
      (move) => this.checkValidMove(move) && !this.isKingOnPos(grid, move)
    );
    return moves;
  }

  // use this to calc checkmate for diagonal movement
  possibleDiagonalMovement(grid) {
    let moves = [];

    // bottom right diagonal
    let i = this.y + 1;
    let j = this.x + 1;
    let isKingFound = false;

    while (this.isInGridBounds([j, i])) {
      if (isKingFound && grid[i][j].piece) {
        break;
      } else if (this.isKingOnPos(grid, [j, i])) {
        isKingFound = true;
        moves.push([j, i]);
      } else if (grid[i][j].piece) {
        moves.push([j, i]);
        break;
      } else {
        moves.push([j, i]);
      }

      i++;
      j++;
    }

    isKingFound = false;

    // top right diagonal
    i = this.y - 1;
    j = this.x + 1;

    while (this.isInGridBounds([j, i])) {
      if (isKingFound && grid[i][j].piece) {
        break;
      } else if (this.isKingOnPos(grid, [j, i])) {
        isKingFound = true;
        moves.push([j, i]);
      } else if (grid[i][j].piece) {
        moves.push([j, i]);
        break;
      } else {
        moves.push([j, i]);
      }

      i--;
      j++;
    }

    isKingFound = false;

    // bottom left diagonal
    i = this.y + 1;
    j = this.x - 1;

    while (this.isInGridBounds([j, i])) {
      if (isKingFound && grid[i][j].piece) {
        break;
      } else if (this.isKingOnPos(grid, [j, i])) {
        isKingFound = true;
        moves.push([j, i]);
      } else if (grid[i][j].piece) {
        moves.push([j, i]);
        break;
      } else {
        moves.push([j, i]);
      }

      i++;
      j--;
    }

    isKingFound = false;

    // top left diagonal
    i = this.y - 1;
    j = this.x - 1;

    while (this.isInGridBounds([j, i])) {
      if (isKingFound && grid[i][j].piece) {
        break;
      } else if (this.isKingOnPos(grid, [j, i])) {
        isKingFound = true;
        moves.push([j, i]);
      } else if (grid[i][j].piece) {
        moves.push([j, i]);
        break;
      } else {
        moves.push([j, i]);
      }

      i--;
      j--;
    }

    isKingFound = false;

    return moves;
  }

  // enumerate all moves on diagonals and stop if there are any pieces
  diagonalMovement(grid) {
    const moves = [];
    // down right diagonal
    let i = this.y + 1;
    let j = this.x + 1;

    while (
      this.isInGridBounds([j, i]) &&
      this.checkValidMove([j, i]) &&
      !this.isKingOnPos(grid, [j, i])
    ) {
      moves.push([j, i]);

      // don't add other moves in this direction if there is an enemy piece

      if (grid[i][j].piece && grid[i][j].piece.color != this.color) {
        break;
      }

      i++;
      j++;
    }

    // top right diagonal
    i = this.y + 1;
    j = this.x - 1;

    while (
      this.isInGridBounds([j, i]) &&
      this.checkValidMove([j, i]) &&
      !this.isKingOnPos(grid, [j, i])
    ) {
      moves.push([j, i]);

      // don't add other moves in this direction if there is an enemy piece
      if (grid[i][j].piece && grid[i][j].piece.color != this.color) {
        break;
      }

      i++;
      j--;
    }

    // top left diagonal
    i = this.y - 1;
    j = this.x + 1;

    while (
      this.isInGridBounds([j, i]) &&
      this.checkValidMove([j, i]) &&
      !this.isKingOnPos(grid, [j, i])
    ) {
      moves.push([j, i]);

      // don't add other moves in this direction if there is an enemy piece
      if (grid[i][j].piece && grid[i][j].piece.color != this.color) {
        break;
      }

      i--;
      j++;
    }

    // top right diagonal
    i = this.y - 1;
    j = this.x - 1;

    while (
      this.isInGridBounds([j, i]) &&
      this.checkValidMove([j, i]) &&
      !this.isKingOnPos(grid, [j, i])
    ) {
      moves.push([j, i]);

      // don't add other moves in this direction if there is an enemy piece
      if (grid[i][j].piece && grid[i][j].piece.color != this.color) {
        break;
      }

      i--;
      j--;
    }

    return moves;
  }

  possibleAxisMovement(grid) {
    const moves = [];

    // positive y axis
    let i = this.y - 1;
    let j = this.x;
    let isKingFound = false;

    while (this.isInGridBounds([j, i])) {
      if (isKingFound && grid[i][j].piece) {
        break;
      } else if (this.isKingOnPos(grid, [j, i])) {
        isKingFound = true;
        moves.push([j, i]);
      } else if (grid[i][j].piece) {
        moves.push([j, i]);
        break;
      } else {
        moves.push([j, i]);
      }

      i--;
    }

    // negative y axis
    i = this.y + 1;
    j = this.x;
    isKingFound = false;

    while (this.isInGridBounds([j, i])) {
      if (isKingFound && grid[i][j].piece) {
        break;
      } else if (this.isKingOnPos(grid, [j, i])) {
        isKingFound = true;
        moves.push([j, i]);
      } else if (grid[i][j].piece) {
        moves.push([j, i]);
        break;
      } else {
        moves.push([j, i]);
      }

      i++;
    }

    // negative x axis
    i = this.y;
    j = this.x - 1;
    isKingFound = false;

    while (this.isInGridBounds([j, i])) {
      if (isKingFound && grid[i][j].piece) {
        break;
      } else if (this.isKingOnPos(grid, [j, i])) {
        isKingFound = true;
        moves.push([j, i]);
      } else if (grid[i][j].piece) {
        moves.push([j, i]);
        break;
      } else {
        moves.push([j, i]);
      }

      j--;
    }

    // negative x axis
    i = this.y;
    j = this.x + 1;
    isKingFound = false;

    while (this.isInGridBounds([j, i])) {
      if (isKingFound && grid[i][j].piece) {
        break;
      } else if (this.isKingOnPos(grid, [j, i])) {
        isKingFound = true;
        moves.push([j, i]);
      } else if (grid[i][j].piece) {
        moves.push([j, i]);
        break;
      } else {
        moves.push([j, i]);
      }

      j++;
    }

    return moves;
  }

  axisMovement(grid) {
    const moves = [];

    // positive y axis
    let i = this.y - 1;
    let j = this.x;

    while (
      this.isInGridBounds([j, i]) &&
      this.checkValidMove([j, i]) &&
      !this.isKingOnPos(grid, [j, i])
    ) {
      moves.push([j, i]);

      // don't add other moves in this direction if there is an enemy piece
      if (grid[i][j].piece && grid[i][j].piece.color != this.color) {
        break;
      }

      i--;
    }

    // negative y axis
    i = this.y + 1;
    j = this.x;

    while (
      this.isInGridBounds([j, i]) &&
      this.checkValidMove([j, i]) &&
      !this.isKingOnPos(grid, [j, i])
    ) {
      moves.push([j, i]);

      // don't add other moves in this direction if there is an enemy piece
      if (grid[i][j].piece && grid[i][j].piece.color != this.color) {
        break;
      }

      i++;
    }

    // negative x axis
    i = this.y;
    j = this.x - 1;

    while (
      this.isInGridBounds([j, i]) &&
      this.checkValidMove([j, i]) &&
      !this.isKingOnPos(grid, [j, i])
    ) {
      moves.push([j, i]);

      // don't add other moves in this direction if there is an enemy piece
      if (grid[i][j].piece && grid[i][j].piece.color != this.color) {
        break;
      }

      j--;
    }

    // negative x axis
    i = this.y;
    j = this.x + 1;

    while (
      this.isInGridBounds([j, i]) &&
      this.checkValidMove([j, i]) &&
      !this.isKingOnPos(grid, [j, i])
    ) {
      moves.push([j, i]);

      // don't add other moves in this direction if there is an enemy piece
      if (grid[i][j].piece && grid[i][j].piece.color != this.color) {
        break;
      }

      j++;
    }

    return moves;
  }

  // TODO: fix diagonal and axis movement to do correct checkmate
  // TODO: add methods for possible diagonals and possible axis
  // (see level 6)
  isKingOnPos(grid, pos) {
    let isValid = false;
    if (
      grid[pos[1]][pos[0]].piece &&
      grid[pos[1]][pos[0]].piece instanceof King
    ) {
      isValid = true;
    }

    return isValid;
  }
}
