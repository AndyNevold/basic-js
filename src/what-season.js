const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  try {
    if (!date) return 'Unable to determine the time of year!';

    let month = date.getMonth();
    let result =
      month >= 2 && month <= 4
        ? 'spring'
        : month >= 5 && month <= 7
        ? 'summer'
        : month >= 8 && month <= 10
        ? 'fall'
        : 'winter';
    return result;
  } catch (error) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason,
};
