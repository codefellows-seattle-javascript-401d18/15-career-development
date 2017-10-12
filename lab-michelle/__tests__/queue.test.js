'use strict';
const Queue = ('../lib/queue');

describe('Testing stack methods', function() {
  describe('Testing push', () => {
    test('should return 1', () => {
      let qOne = new Queue;
      stackOne.enqueue(3);
      stackOne.enqueue(2);
      stackOne.enqueue(1);
      expect(qOne.front).toBe(3);
    });
  });
});
