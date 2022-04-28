const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function isString(value) {
  return (typeof value === "string" || value instanceof String);
}

function createDreamTeam(members) {
  if(!members) {
    return false;
  }

  let stringMembers = [];
  let firstLetters = [];

  for (let i = 0; i < members.length; i++) {
    if (isString(members[i])) {
      stringMembers.push(members[i]);
    }
  }

  if (stringMembers.length == 0) {
    return false;
  }

  for (let stringMember of stringMembers) {
  const pattern = /^[a-zA-z\s]/;
  const isName = pattern.test(stringMember);
    if (isName) {
      const name = stringMember.trim();
      firstLetters.push(name[0].toUpperCase());
    }
  }
  
const sortFirstLetters = firstLetters.sort();
const teamName = sortFirstLetters.join('');
return teamName;
}

module.exports = {
  createDreamTeam
};
