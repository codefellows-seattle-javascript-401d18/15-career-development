'use strict';
const Stack = ('../lib/stack.js');

describe('Testing stack methods', function() {
  describe('Testing push', () => {
    test('should return 1', () => {
      let stackOne = new Stack;
      stackOne.push(3);
      stackOne.push(2);
      stackOne.push(1);
      expect(stackOne.peek).toBe(1);
    });
  });
});
