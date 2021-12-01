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

  changePiece(piece) {
    if (!piece) {
      this.htmlNode.innerHTML = "";
      this.piece = null;
    } else {
      this.htmlNode.innerHTML = piece.img;
      this.piece = piece;
    }
  }

  highlight() {
    this.htmlNode.style.backgroundColor = "yellow";
  }

  deHighlight() {
    this.htmlNode.style.backgroundColor = this.color;
  }

  markRed() {
    this.htmlNode.style.backgroundColor = "#ffda00";
  }

  cleanColor() {
    this.htmlNode.style.backgroundColor = this.color;
  }

  clearCell(grid) {
    if (this.piece) {
      this.piece.cleanMarkedCells(grid);
    }
    this.deHighlight();
  }
}
