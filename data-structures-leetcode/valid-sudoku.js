/*
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const checkObj = (obj) => {
    const key = ".";
    delete obj[key];
    if (Object.entries(obj).length === 0) return;
    for (num in obj) {
      if (obj[num] >= 2) return false;
    }
    return true;
  };

  //check across
  let acrossObj = {};
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      acrossObj[board[i][j]] = acrossObj[board[i][j]] + 1 || 1;
    }
    if (!checkObj(acrossObj)) return false;
    acrossObj = {};
  }

  //check down
  let downObj = {};
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      downObj[board[j][i]] = downObj[board[j][i]] + 1 || 1;
    }
    if (!checkObj(downObj)) return false;
    downObj = {};
  }

  // check square
  let square = {};
  for (var i = 0; i < board.length; i++) {
    iterI = Math.floor(i / 3) * 3;
    for (var j = 0; j < board[i].length; j++) {
      iterJ = Math.floor(j / 3) * 3;
      console.log(iterI, iterJ, i, j);
    }
  }
  return true;
};

const jmBoardTrue = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
const jmBoardFalse = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  [".", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(jmBoardTrue));
console.log(isValidSudoku(jmBoardFalse));
