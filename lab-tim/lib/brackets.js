'use-strict';

module.exports = {
  areTheyBalanced(string) {
    var stack = [];
    var open = { '{': '}', '[': ']', '(': ')' };
    var closed = { '}': true, ']': true, ')': true };

    for (var i = 0; i < string.length; i ++) {
      var chr = string[i];
      if (open[chr]) {
        stack.push(chr);
      } else if (closed[chr]) {
        if (open[stack.pop()] !== chr) return false;
      }
    }

    return stack.length === 0;
  },
};
