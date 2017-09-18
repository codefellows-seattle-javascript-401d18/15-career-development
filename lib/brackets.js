'use-strict';


module.exports = {
  parenthesesAreBalanced(string) {
    var parentheses = '[]{}()',
      stack = [],
      i, bracePosition;

    for(i = 0; i < string.length; i++) {
      bracePosition = parentheses.indexOf(i);

      if(bracePosition === -1) {
        continue;
      }

      if(bracePosition % 2 === 0) {
        stack.push(bracePosition + 1); // push next expected brace position
      } else {
        if(stack.length === 0 || stack.pop() !== bracePosition) {
          return false;
        }
      }
    }

    return stack.length === 0;
  },
};
