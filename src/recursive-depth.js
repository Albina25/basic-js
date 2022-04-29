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
  depth = [];

  constructor(arr) {
    this.arr = arr;
    
  }

  max(depth) {
    return depth.length > 0 ? Math.max(...depth) : 0;
  }

  calculateDepth(arr, d = 1, depth = []) {
    depth.push(d);
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
         this.calculateDepth(arr[i], d+1, depth);
        }
      }
    return this.max(depth);
  }
}

module.exports = {
  DepthCalculator
};
