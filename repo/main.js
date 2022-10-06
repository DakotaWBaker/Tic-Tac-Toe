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