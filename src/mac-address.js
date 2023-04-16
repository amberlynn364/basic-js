const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
let test = '00-1B-63-84-45-E6'
let test2 = 'not a MAC-48 address'
function isMAC48Address(n) {
  let macString = n.split('-').join('');
  console.log(macString)
  let regEx = /[ABCDEF0123456789]/g;
if (macString.match(regEx).join('') === macString) {
  return true;
} else {
  return false;
}
}
isMAC48Address(test)
module.exports = {
  isMAC48Address
};
