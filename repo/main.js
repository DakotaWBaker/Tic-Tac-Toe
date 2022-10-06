let state = {
    playerTurn: "X",
    gameActive: "true",
    winner: "",
    turnCount: 0,
    xTiles: [],
     oTiles: [],
    winCondition: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [1, 4, 7],
      [0, 3, 6],
      [2, 5, 8],
    ],
    winner: 'none',
  };
  const mainDiv = document.getElementById("main");
function createPage(parentEl, tag, className, idName, text) {
  let element = document.createElement(tag);
  element.innerHTML = text;
  if (className) {
    element.setAttribute("class", className);
  }
  if (idName) {
    element.setAttribute("id", idName);
  }
  parentEl.appendChild(element);
}

function drawBoard() {
  createPage(mainDiv, "div", "container", "cont",'');
  createPage(cont, "div", "row", "firstRow",'');
  createPage(firstRow, "div", "col col1", "0",'');
  createPage(firstRow, "div", "col col2", "1",'');
  createPage(firstRow, "div", "col col3", "2",'');
  createPage(cont, "div", "row", "secondRow",'');
  createPage(secondRow, "div", "col col4", "3",'');
  createPage(secondRow, "div", "col col5", "4",'');
  createPage(secondRow, "div", "col col6", "5",'');
  createPage(cont, "div", "row", "thirdRow",'');
  createPage(thirdRow, "div", "col col7", "6",'');
  createPage(thirdRow, "div", "col col8", "7",'');
  createPage(thirdRow, "div", "col col9", "8", '');
  createPage(mainDiv, 'button', 'btn', 'btn', 'RESET');
  createPage(mainDiv, 'p', 'player', 'play', 'Player 1s Turn');
}
drawBoard();