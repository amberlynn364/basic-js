const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
let test = [[[]]]
class DepthCalculator {
  calculateDepth(arr) {
    // console.log(...arr.map(item => this.calculateDepth(item)))
    return Array.isArray(arr) ?
    1 + Math.max(0, ...arr.map(item => this.calculateDepth(item))) :
    0;
}
}

const depthCalc = new DepthCalculator();
console.log(depthCalc.calculateDepth(test))
module.exports = {
  DepthCalculator
};
