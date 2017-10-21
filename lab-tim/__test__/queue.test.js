'use-strict';

const Queue = require('../lib/queue');

describe('Testing queue methods', () => {
  describe('#queue methods', () => {
    describe('#enqueue', () => {
      test('should add new node to queue', () => {
        let testQueue = new Queue;
        testQueue.myEnqueue(1);
        let result = testQueue.myDequeue();
        expect(result).toEqual(1);
      });
    });
    describe('#dequeue', () => {
      test('should remove a node from queue', () => {
        let testQueue = new Queue;
        testQueue.myEnqueue(1);
        testQueue.myEnqueue(2);
        let result = testQueue.myDequeue();
        expect(result).toEqual(1);
      });
    });
  });
});
