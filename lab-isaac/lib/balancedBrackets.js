'use strict';

const Node = require('./node');
const Stack = require('./lib/stacks');

module.exports = class {

  isBracket(string) {
    let stack = new Node;
    let open = ['[', '(', '{'];
    // let close = [']', ')', '}'];
    let stringArr = string.split('');
    for(let i = 0; i < stringArr.length; i++) {
      for(let j = 0; j < open.length; j++) {
        if(stringArr[i] === open[j]) {
          stack.push(stringArr[i]);
        }

      }
    }
    console.log(this.stack);
  };

};
