const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const arrResult = [];
  const tempArr = domains.map((elem) => elem.split('.').reverse());

  tempArr.forEach((subArray) => {
    let element = '';
    subArray.forEach((arr) => {
      element += `.${arr}`;
      arrResult.push(element);
    });
  });

  arrResult.forEach((elem) => {
    if (result[elem] === undefined) {
      result[elem] = 1;
    } else {
      result[elem]++;
    }
  });

  return result;
}

getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']);

module.exports = {
  getDNSStats,
};
