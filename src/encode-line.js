const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let result = '';
  let count = 1;

  [...str].forEach((_, i) => {
    if (str[i] === str[i + 1]) {
      count++;
    }
    if (str[i] !== str[i + 1]) {
      result += count === 1 ? `${str[i]}` : `${count + str[i]}`;
      count = 1;
    }
  });

  return result;
}

module.exports = {
  encodeLine,
};
