const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine(str) {
  let arr = [];
  let count = 1;
  for(let i = 0; i < str.length; i++) {
    const symbol = str[i];
    if (str[i] == str [i+1]) {
      count++;
    } else if (count > 1) {
      const encodeLetter = `${count}${symbol}`;
      arr.push(encodeLetter);
      count = 1;
    } else {
      arr.push(`${symbol}`);
    }
  }
  const encodeLine = arr.join('');
  return encodeLine;
}

module.exports = {
  encodeLine
};
