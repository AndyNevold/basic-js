const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  matrix.forEach((elem, index) => {
    result += elem.reduce((sum, element, i) => {
      if (matrix[index - 1] !== undefined) {
        if (matrix[index - 1][i] !== 0) {
          return sum + element;
        }
      } else {
        return sum + element;
      }
      return sum;
    }, 0);
  });
  return result;
}

getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]);
module.exports = {
  getMatrixElementsSum,
};
