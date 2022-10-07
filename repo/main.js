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
  winner: "none",
  firstName: "",
  secondName: "",
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
  createPage(mainDiv, "div", "div", "mainCont", "");
  createPage(mainCont, "div", "container", "cont", "");
  createPage(cont, "div", "row", "firstRow", "");
  createPage(firstRow, "div", "col col1", "0", "");
  createPage(firstRow, "div", "col col2", "1", "");
  createPage(firstRow, "div", "col col3", "2", "");
  createPage(cont, "div", "row", "secondRow", "");
  createPage(secondRow, "div", "col col4", "3", "");
  createPage(secondRow, "div", "col col5", "4", "");
  createPage(secondRow, "div", "col col6", "5", "");
  createPage(cont, "div", "row", "thirdRow", "");
  createPage(thirdRow, "div", "col col7", "6", "");
  createPage(thirdRow, "div", "col col8", "7", "");
  createPage(thirdRow, "div", "col col9", "8", "");
  createPage(mainCont, "button", "btn btn-primary", "btn", "RESET");
  createPage(mainCont, "p", "player", "play", "");

  const nameForm = document.createElement("form");
  mainCont.appendChild(nameForm);
  const player1 = document.createElement("input");
  player1.setAttribute("type", "text");
  player1.setAttribute("id", "input1");
  player1.setAttribute("placeholder", "Player1");
  nameForm.appendChild(player1);
  const player2 = document.createElement("input");
  player2.setAttribute("type", "text");
  player2.setAttribute("id", "input1");
  player2.setAttribute("placeholder", "Player2");
  nameForm.appendChild(player2);
  const submit = document.createElement("input");
  submit.setAttribute("type", "submit");
  submit.setAttribute("id", "btn1");
  submit.setAttribute('class', 'btn btn-primary')
  submit.innerText = "Set Name";
  nameForm.appendChild(submit);

  nameForm.addEventListener("submit", function submitNames(e) {
    e.preventDefault();
    state.firstName = player1.value;
    state.secondName = player2.value;
    turn.innerHTML = `${state.firstName}s turn!!`;
    console.log(state.firstName);
  });

  const div1 = document.getElementById("0").addEventListener(
    "click",
    (e) => {
      updateTile(e);
    },
    { once: true }
  );

  const div2 = document.getElementById("1").addEventListener(
    "click",
    (e) => {
      updateTile(e);
    },
    { once: true }
  );
  const div3 = document.getElementById("2").addEventListener(
    "click",
    (e) => {
      updateTile(e);
    },
    { once: true }
  );
  const div4 = document.getElementById("3").addEventListener(
    "click",
    (e) => {
      updateTile(e);
    },
    { once: true }
  );
  const div5 = document.getElementById("4").addEventListener(
    "click",
    (e) => {
      updateTile(e);
    },
    { once: true }
  );
  const div6 = document.getElementById("5").addEventListener(
    "click",
    (e) => {
      updateTile(e);
    },
    { once: true }
  );
  const div7 = document.getElementById("6").addEventListener(
    "click",
    (e) => {
      updateTile(e);
    },
    { once: true }
  );
  const div8 = document.getElementById("7").addEventListener(
    "click",
    (e) => {
      updateTile(e);
    },
    { once: true }
  );
  const div9 = document.getElementById("8").addEventListener(
    "click",
    (e) => {
      updateTile(e);
    },
    { once: true }
  );
  const btn = document.getElementById("btn");
  btn.addEventListener("click", (e) => {
    if (e.target === btn) {
      state.playerTurn = "X";
      state.xTiles = [];
      state.oTiles = [];
      state.turnCount = 0;
      state.winner= 'none'
      if (mainCont) {
        mainCont.removeChild(turn);
        mainCont.removeChild(btn);
        mainDiv.removeChild(mainCont);
      }
      drawBoard();
    }
  });
}
drawBoard();

const turn = document.getElementById("play");

function updateTile(e) {
  e.target.innerHTML = `${state.playerTurn}`;
  if (state.playerTurn === "X") {
    state.xTiles.push(parseInt(e.target.id));
  } else {
    state.oTiles.push(parseInt(e.target.id));
  }

  updateState();
}
function updatePlayer() {
  if (state.playerTurn === "X") {
    state.playerTurn = "O";
    turn.innerHTML = `${state.secondName}s turn!!`;
  } else {
    state.playerTurn = "X";
    turn.innerHTML = `${state.firstName}s turn!!`;
  }
}

function updateState() {
  state.turnCount++;

  if (state.turnCount > 3) {
    checkWin();
  }
  updatePlayer();
}
function checkWin() {
  if (state.turnCount === 9 && state.winner === "none") {
    alert('draw');
  }
  state.xTiles.sort((a, b) => a - b);
  state.oTiles.sort((a, b) => a - b);
  for (let index = 0; index < state.winCondition.length; index++) {
    const line = state.winCondition[index];
    console.log(line);
    if (
      (state.xTiles.includes(line[0]) &&
        state.xTiles.includes(line[1]) &&
        state.xTiles.includes(line[2])) ||
      (state.oTiles.includes(line[0]) &&
        state.oTiles.includes(line[1]) &&
        state.oTiles.includes(line[2]))
    ) {
      state.winner = state.playerTurn;
      gameOver();
    } else if (
      (state.xTiles.includes([0]) &&
        state.xTiles.includes([1]) &&
        state.xTiles.includes([2])) ||
      (state.oTiles.includes(line[0]) &&
        state.oTiles.includes(line[1]) &&
        state.oTiles.includes(line[2]))
    ) {
      state.winner = state.playerTurn;
      gameOver();
    } else if (
      (state.xTiles.includes(line[0]) &&
        state.xTiles.includes(line[1]) &&
        state.xTiles.includes(line[2])) ||
      (state.oTiles.includes(line[0]) &&
        state.oTiles.includes(line[1]) &&
        state.oTiles.includes(line[2]))
    ) {
      state.winner = state.playerTurn;
      gameOver();
    }
  }
}
function gameOver() {
  if (state.winner === "X") {
    setTimeout(() => {
      turn.innerHTML = `${state.firstName} WINS`;;
    }, 100);
  } else if (state.winner === "O") {
    setTimeout(() => {
      turn.innerHTML = `${state.firstName} WINS`;;
    }, 100);
  }
}