const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) && members.length > 0) {
    let count = '';
    members = members.filter((member) => typeof member === 'string');

    for (let i = 0; i < members.length; i++) {
      members[i] = members[i].split('');
      for (let j = 0; j < members[i].length; j++) {
        if (members[i][0] == ' ') {
          members[i].splice(0, 1);
        }
      }
      members[i] = members[i].join('');
      count += members[i][0];
    }
    return count.toUpperCase().split('').sort().join('');
  } else {
    return false;
  }
}

module.exports = {
  createDreamTeam,
};
