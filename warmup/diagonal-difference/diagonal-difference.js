function diagonalDifference(arr) {
  let diagonalA = 0;
  let diagonalB = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        diagonalA += arr[i][j];
      }
      if (i === arr.length - (j + 1)) {
        diagonalB += arr[i][j];
      }
    }
  }
  return diagonalA - diagonalB >= 0 ? diagonalA - diagonalB : 0 - (diagonalA - diagonalB);
}