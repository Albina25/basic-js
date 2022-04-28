const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let emailDomain = '';
  const l = email.length - 1;
  
  for (let i = l; i >= 0; i--) {
    if (email[i] === '@') {
      const index = i;
      console.log("domain: ", index);
      emailDomain = email.slice(index+1);
      break;
    }
  }
    return emailDomain;
}
module.exports = {
  getEmailDomain
};
