class KnightTravailer {
  constructor(startSquare, endSquare) {
    this.startSquare = startSquare;
    this.endSquare = endSquare;
    this.rootMove = new moveNode(null, startSquare);
    this.endMove = null;
  }
  findEndSquare() {
    let moveQueue = [this.rootMove];
    let endSquareMoveNode = null;

    while (endSquareMoveNode == null) {
      let currentMoveNode = moveQueue[0];
      if (!(JSON.stringify(currentMoveNode.startSquare) == JSON.stringify(this.endSquare))) {
        for (const move of currentMoveNode.availableMoves) {
          let newMoveNode = new moveNode(currentMoveNode, move);
          moveQueue.push(newMoveNode);
        }
        moveQueue.shift();
      } else {
        endSquareMoveNode = currentMoveNode;
      }
    }
    this.endMove = endSquareMoveNode;
  }

  getMovePath() {
    this.findEndSquare();
    let movePath = [];
    let currentNode = this.endMove;
    movePath.push(currentNode.startSquare);
    while (currentNode.previousSquare !== null) {
      movePath.push(currentNode.previousSquare.startSquare);
      currentNode = currentNode.previousSquare;
    }

    return movePath.reverse();
    
  }
}

class moveNode {
  constructor(prevSquare, startSquare) {
    this.startSquare = startSquare
    this.previousSquare = prevSquare;
    this.availableMoves = this.calculateMoves();
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
    availableMoves.push(xCord + 1, yCord - 2);
    availableMoves.push([xCord - 1, yCord - 2]);

    availableMoves = availableMoves.filter(
      (array) =>
        array[0] >= 0 && array[0] <= 7 && array[1] >= 0 && array[1] <= 7
    );
    
    return availableMoves;
  }
}

function knightMoves(startSquare, endSquare) {
  if (typeof startSquare != "object" || typeof endSquare != "object") {
    return "Invalid input: Not an array";
  } else if (startSquare.length != 2 || endSquare.length != 2) {
    return "Invalid input: Incorrect shape";
  }

  const knightTravailer = new KnightTravailer(startSquare, endSquare);
  return knightTravailer.getMovePath();
}

console.log(knightMoves([0,0],[1,2]));