const { NotImplementedError } = require('../extensions/index.js');

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
let testArr = [
  ['David Abram'],
  ['Robin Attfield'],
  'Thomas Berry',
  ['Paul R.Ehrlich'],
  'donna Haraway',
  ' BrIaN_gOodWiN  ',
  {
    0: 'Serenella Iovino'
  },
  'Erazim Kohak',
  '  val_plumwood',
];
function createDreamTeam(members) {
  let arr = [];
  
  if (!Array.isArray(members)) {
    return false;
  }

  for (let i = 0; i < members.length; i++) {
    if (typeof(members[i]) === 'string') {
      arr.push(members[i].replace( /\s/g, '').slice(0, 1).toUpperCase())
    }
  }
  let result = arr.sort((a , b) => a.localeCompare(b)).join('');
  return result;
}
createDreamTeam(testArr)
module.exports = {
  createDreamTeam
};
