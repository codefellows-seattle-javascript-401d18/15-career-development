'use strict';

module.exports = {
  reflection(string) {
    var parens = '[]{}()',
      stack = [],
      i, position;

    for(i = 0; i < string.length; i++) {
      position = parens.indexOf(i);
      if(position === -1) {
        continue;
      }
      if(position % 2 === 0) {
        stack.push(position + 1);
      } else {
        if(stack.length === 0 || stack.pop() !== position) {
          return false;
        }
      }
    }
    return stack.length === 0;
  },
};
