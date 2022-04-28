const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function isString(value) {
  return (typeof value === "string" || value instanceof String);
}

function getCommonCharacterCount(s1, s2) {
  let count = 0;

  if (s1.length < s2.length) {
    longStr = s1;
    shortStr = s2;
  } else {
    longStr = s2;
    shortStr = s1;
    }
  
  longArr = longStr.split('');
  shortArr = shortStr.split('');

  for (let i = 0; i < shortArr.length; i++){ 
    if (longArr.indexOf(shortArr[i]) !== -1) {
      const index = longArr.indexOf(shortArr[i]);
      longArr.splice(index, 1);
      count++;
    }
 }
 return count;
}

module.exports = {
  getCommonCharacterCount
};
