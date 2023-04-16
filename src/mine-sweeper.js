const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
let test = [
  [true, false, false],
  [false, true, false],
  [false, false, false],
]
console.log(test)
function minesweeper(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push([]);

    for (let k = 0; k < matrix[0].length; k++) {

      let sum = 0;

      for (let o = -1; o <= 1; o++) {

        for (let p = -1; p <= 1; p++) {
          
          if (o === 0 && p === 0) {
            continue;
          }
          if (matrix[i + o] && matrix[i + o][k + p] && matrix[i + o][k + p] === true) {
            sum++
          };
        }
      }
      result[i][k] = sum;
    }
  }
  console.log(result)
  return result;

}
minesweeper(test)
module.exports = {
  minesweeper
};
