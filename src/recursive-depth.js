const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let result = 0;

    [...arr].forEach((elem) => {
      if (Array.isArray(elem)) {
        let countFunc = this.calculateDepth(elem);
        if (countFunc > result) {
          result = countFunc;
        }
      }
    });

    result++;

    return result;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
