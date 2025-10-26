const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [...String(n)];
  if (arr[1] == 0) {
    arr.splice(1, 1);
  } else if (arr[0] < arr[1]) {
    arr.shift();
  } else {
    const min = [...String(n)].sort((a, b) => a - b).shift();
    const deleteIndex = arr.findIndex((elem) => elem === min);
    arr.splice(deleteIndex, 1);
  }
  return +arr.join('');
}

module.exports = {
  deleteDigit,
};
