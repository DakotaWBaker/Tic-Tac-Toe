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
const div1 = document.getElementById("0");
const div2 = document.getElementById("1");
const div3 = document.getElementById("2");
const div4 = document.getElementById("3");
const div5 = document.getElementById("4");
const div6 = document.getElementById("5");
const div7 = document.getElementById("6");
const div8 = document.getElementById("7");
const div9 = document.getElementById("8");
const turn = document.getElementById('play');
div1.addEventListener(
  "click",
  (e) => {
    updateTile(e);
  },
  { once: true }
);

div2.addEventListener(
  "click",
  (e) => {
    updateTile(e);
  },
  { once: true }
);
div3.addEventListener(
  "click",
  (e) => {
    updateTile(e);
  },
  { once: true }
);
div4.addEventListener(
  "click",
  (e) => {
    updateTile(e);
  },
  { once: true }
);
div5.addEventListener(
  "click",
  (e) => {
    updateTile(e);
  },
  { once: true }
);
div6.addEventListener(
  "click",
  (e) => {
    updateTile(e);
  },
  { once: true }
);
div7.addEventListener(
  "click",
  (e) => {
    updateTile(e);
  },
  { once: true }
);
div8.addEventListener(
  "click",
  (e) => {
    updateTile(e);
  },
  { once: true }
);
div9.addEventListener(
  "click",
  (e) => {
    updateTile(e);
  },
  { once: true }
);
function updateTile(e) {
    e.target.innerHTML = `${state.playerTurn}`;
  if (state.playerTurn === 'X') {
      state.xTiles.push(parseInt(e.target.id));
  } else {
      state.oTiles.push(parseInt(e.target.id));
  }
   
   
    updateState();
  }
  function updatePlayer() {
    if (state.playerTurn === "X") {
      state.playerTurn = "O";
      turn.innerHTML = 'Player 2s Turn';
    } else {state.playerTurn = 'X';
    turn.innerHTML = 'Player 1s Turn';
    }
   
  }
  
  function updateState() {
    state.turnCount++;
    
    if (state.turnCount > 3){
    checkWin();
    }
    updatePlayer();
  }