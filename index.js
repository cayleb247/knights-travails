class moveNode {
  constructor(startSquare, endSquare) {
    this.startSquare = startSquare;
    this.endSquare = endSquare;
    this.availableMoves = calculateMoves();
    this.oneMoveAway = false;
  }
  calculateMoves() {
    let availableMoves = [];
    let xCord = this.startSquare[0];
    let yCord = this.startSquare[1];

    availableMoves.push([xCord + 1, yCord + 2]);
    availableMoves.push([xCord - 1, yCord + 2]);
    availableMoves.push([xCord + 2, yCord + 1]);
    availableMoves.push([xCord + 2, yCord - 1]);
    availableMoves.push([xCord - 2, yCord + 1]);
    availableMoves.push([xCord - 2, yCord - 1]);
    availableMoves.push([xCord + 1, yCord - 2]);
    availableMoves.push([xCord - 1, yCord - 2]);

    availableMoves = availableMoves.filter(
      (array) =>
        array[0] >= 0 && array[0] <= 7 && array[1] >= 0 && array[1] <= 7
    );

    if (availableMoves.includes(this.endSquare)) {
        this.oneMoveAway = true;
    }
    
    return availableMoves;
  }
}

function calculateMoves(startSquare) {
  let availableMoves = [];
  let xCord = startSquare[0];
  let yCord = startSquare[1];

  availableMoves.push([xCord + 1, yCord + 2]);
  availableMoves.push([xCord - 1, yCord + 2]);
  availableMoves.push([xCord + 2, yCord + 1]);
  availableMoves.push([xCord + 2, yCord - 1]);
  availableMoves.push([xCord - 2, yCord + 1]);
  availableMoves.push([xCord - 2, yCord - 1]);
  availableMoves.push([xCord + 1, yCord - 2]);
  availableMoves.push([xCord - 1, yCord - 2]);

  availableMoves = availableMoves.filter(
    (array) => array[0] >= 0 && array[0] <= 7 && array[1] >= 0 && array[1] <= 7
  );

  return availableMoves;
}

function knightMoves(startSquare, endSquare) {
  if (typeof startSquare != "object" || typeof endSquare != "object") {
    return "Invalid input: Not an array";
  } else if (startSquare.length != 2 || endSquare.length != 2) {
    return "Invalid input: Incorrect shape";
  }

  return calculateMoves(startSquare);
}

console.log(knightMoves([0, 0], [3, 5]));
