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
class DepthCalculator {
  calculateDepth(array) {
    if (Array.isArray(array) === false) {
      return 0;
    }
    let depth = 0;
    for (let i = 0; i < array.length; i++) {
      depth = Math.max(depth, this.calculateDepth(array[i]));
    }
    return 1 + depth;
  }
}
const check = new DepthCalculator();
console.log(check.calculateDepth([[[]]]));

module.exports = {
  DepthCalculator
};
