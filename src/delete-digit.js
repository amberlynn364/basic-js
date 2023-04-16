const { NotImplementedError } = require('../extensions/index.js');

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
  let nToString = n + '';
  let result = [];

  for (let i = 0; i < nToString.length; i++) {
    result.push(+(nToString.slice(0, i) + nToString.slice(i + 1)))
  }
  return Math.max.apply(null, result)
}

module.exports = {
  deleteDigit
};
