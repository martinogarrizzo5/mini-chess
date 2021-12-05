class GridCell {
  htmlNode;
  color;
  x;
  y;
  piece;

  constructor(x, y, htmlNode, color) {
    this.x = x;
    this.y = y;
    this.htmlNode = htmlNode;
    this.color = color;
  }

  // substitute the piece of this cell with a given one
  changePiece(piece) {
    if (!piece) {
      this.htmlNode.innerHTML = "";
      this.piece = null;
    } else {
      this.htmlNode.innerHTML = piece.img;
      this.piece = piece;
    }
  }

  // highlight the cell
  highlight() {
    const highlightColor = "yellow";
    this.htmlNode.style.backgroundColor = highlightColor;
  }

  // remove highlighting of the cell
  deHighlight() {
    this.htmlNode.style.backgroundColor = this.color;
  }

  // mark the cell as possible move
  markRed() {
    this.htmlNode.style.backgroundColor = "#ffda00";
  }

  // put color of the cell to the original one
  cleanColor() {
    this.htmlNode.style.backgroundColor = this.color;
  }

  // clean highlight of this cell and signature of marked cells around
  clearCell(grid) {
    if (this.piece) {
      this.piece.cleanMarkedCells(grid);
    }
    this.deHighlight();
  }
}
