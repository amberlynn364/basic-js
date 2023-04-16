const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
let test = [-1, 150, 190, 170, -1, -1, 160, 180];
function sortByHeight(arr) {
  let sortedArr = arr.filter(position => position !== -1).sort((prev, curr) => prev - curr);
  console.log(sortedArr)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      sortedArr.splice(i, 0, -1)
    }
  }
  console.log(sortedArr)
  return sortedArr
}
sortByHeight(test)
module.exports = {
  sortByHeight
};
