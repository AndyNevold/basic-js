const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  let result = '';
  result = getString(str, options.repeatTimes);
  return result;

  function getString(string, repeat) {
    if (repeat === undefined) {
      repeat = 1;
    }

    let res = '';

    for (let i = 1; i <= repeat; i++) {
      res += str + getAdditionStr(options.addition, options.additionRepeatTimes, options.additionSeparator);
      if (i < repeat) {
        res += getSeparator(options.separator);
      }
    }
    return res;
  }

  function getAdditionStr(addition, additionRepeatTimes, additionSeparator = '|') {
    if (addition === undefined) {
      return '';
    }
    if (additionRepeatTimes === undefined) {
      additionRepeatTimes = 1;
    }

    let res = '';

    for (let i = 1; i <= additionRepeatTimes; i++) {
      res += addition;
      if (i < additionRepeatTimes) {
        res += additionSeparator;
      }
    }
    return res;
  }

  function getSeparator(separator = '+') {
    return separator;
  }
}

module.exports = {
  repeater,
};
