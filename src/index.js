// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined) {
    return [];
  }
  const resArr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i % 2 === 0) {
                resArr.push(matrix[i][j]);
            } else {
                resArr.push(matrix[i][matrix[i].length - 1 - j]);
            }
        }
    }
    return resArr;
};
