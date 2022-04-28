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
 function isNumber(value) {
  return (typeof value === "number" || value instanceof Number);
}

function deleteDigit(n) {
  if (!isNumber(n)) {
    return false;
  }

  const allDigits = [];
  const arr = String(n).split('').map((i) => Number(i));
  
  for (let i = 0; i < arr.length; i++) {
    const copyArr = arr.slice();
    copyArr.splice(i, 1);
    const newNumber = Number(copyArr.join(''));
    allDigits.push(newNumber);
  }
  const maxNumber = Math.max(...allDigits);
  return maxNumber;
}

module.exports = {
  deleteDigit
};
