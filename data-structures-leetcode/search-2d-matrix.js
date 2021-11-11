var searchMatrix = function (matrix, target) {
  //   matArr = matrix.flat();
  //   console.log(matArr);
  //
  //   // binary search
  //   let mid = Math.floor(matArr.length / 2);
  //   // arr = [ 0 , 1] l = 2 m = 1; arr = [ 1, 2, 3] l = 3, m = 1
  //   while (matArr.length > 1) {
  //     mid = Math.floor(matArr.length / 2);
  //     if (matArr[mid] === target) {
  //       return true;
  //     } else if (matArr[mid] > target) {
  //       matArr.splice(mid, mid);
  //       console.log("upper", matArr);
  //       console.log(matArr.length);
  //     } else if (matArr[mid] < target) {
  //       matArr.splice(0, mid);
  //       console.log("lower", matArr);
  //     }
  //     if (matArr.length === 1) {
  //       if (target === matArr[0]) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // };

  // sol2

  // let rows = matrix.length;
  // let cols = matrix[0].length;
  // for (i = 0; i < rows; i++) {
  //   if (target === matrix[i][cols - 1]) {
  //     return true;
  //   } else if (target > matrix[i][cols - 1]) {
  //     continue;
  //   }
  //   for (j = 0; j < cols; j++) {
  //     if (matrix[i][j] === target) {
  //       return true;
  //     }
  //   }
  // }
  // return false;

  // sol 3
  let rowE = matrix.length,
    rowS = 0,
    colE = matrix[0].length,
    colS = 0,
    midRow = Math.floor(rowE / 2),
    midCol = Math.floor(colE / 2),
    lastCol = Number.NEGATIVE_INFITY;
  while (rowS < rowE) {
    console.log(matrix[midRow][midCol], 55);
    midRow = Math.floor((rowE - rowS) / 2);
    while (colS < colE && lastCol !== midCol) {
      lastCol = midCol;
      console.log(lastCol, midCol);
      midCol = Math.floor((colE - colS) / 2);
      if (matrix[midRow][midCol] === target) {
        return true;
      } else if (target > matrix[midRow][midCol]) {
        lastCol = midCol;
        colS = Math.floor((colE - colS) / 2);
      } else if (target < matrix[midRow][midCol]) {
        lastCol = midCol;
        colE = Math.floor(colS + (colE - colS) / 2);
      }
    }
    if (matrix[midRow][midCol] === target) {
      return true;
    } else if (target > matrix[midRow][midCol]) {
      rowS = Math.floor((rowE - rowS) / 2);
    } else if (target < matrix[midRow][midCol]) {
      rowE = Math.floor(rowS + (rowE - rowS) / 2);
    }
    midCol = Math.floor((colE - colS) / 2);
    lastCol = Number.NEGATIVE_INFITY;
  }
  return false;
};

const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  target = 11;

console.log(searchMatrix(matrix, target));
