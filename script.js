const board = document.getElementById("board");
function chessboard(row, col) {
  for (let i = 0; i < row; i++) {
    let row = document.createElement("DIV");
    row.className = "row";
   // row.style.flexDirection = i % 2 === 0 ? "" : "row-reverse";
    const firstColor = i % 2 === 0 ? "white" : "black";
    const secondColor = firstColor === "white" ? "black" : "white";
    for (let j = 0; j < col; j++) {
      let square = document.createElement("DIV");
      square.className = "square";
      // square.style.backgroundColor = j % 2 === 0 ? "white" : "black";
      square.style.backgroundColor = j % 2 === 0 ? firstColor : secondColor;
      row.appendChild(square);
    }
    board.appendChild(row);
  }
}

chessboard(8, 8);
