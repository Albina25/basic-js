const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function isString(value) {
  return (typeof value === "string" || value instanceof String);
}

function isNumber(value) {
  const str = value.trim();
  if (str.length === 0) return false;
  return !isNaN(+str);
}

function dateSample(sampleActivity) {
  if (!isString(sampleActivity)) {
    return false;
  }

  let result;
  const number = Number(sampleActivity);
  if (!isNumber(sampleActivity)) {
    return false;
  } else {
      if (sampleActivity > 0 && sampleActivity < 15) {
      result = Math.ceil(Math.log(15/+sampleActivity)/(0.693/5730));
      } else {
        return false;
      }
    }
  return result;
}

module.exports = {
  dateSample
};
