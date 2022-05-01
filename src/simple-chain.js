const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */


const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length - 1;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    position = position - 1;
    if (this.chain[position] && typeof position === 'number') {
      this.chain.splice(position, 1);
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.slice();
    result = result.join('~~');
    this.chain = [];
    return result;
  }
};


module.exports = {
  chainMaker
};
