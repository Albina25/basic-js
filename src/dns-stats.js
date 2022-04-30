const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function setKey(i, dns) {
  let res = 0;
  if (i == 0) res=  '.' + dns[0];
  if (i == 1) res= '.' + dns[0] + '.' + dns[1];
  if (i == 2) res= '.' + dns[0] + '.' + dns[1] + '.' + dns[2];
  return res;
}

function getDNSStats(domains) {
  let obj = {};
  
  for (let el of domains) {
    let dns = el.split('.').reverse();
    let i = 0;
    while (i < dns.length) {
      let key = setKey(i, dns);
      if (key in obj) {
          obj[key] = obj[key] + 1;
        } else {
          obj[key] = 1;
        }   
        i++; 
    }
  }
return obj;
}

module.exports = {
  getDNSStats
};
