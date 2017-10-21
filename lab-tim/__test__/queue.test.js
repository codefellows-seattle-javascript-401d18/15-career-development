'use-strict';

const Queue = require('../lib/queue');

describe('Testing queue methods', () => {
  describe('#queue methods', () => {
    describe('#enqueue', () => {
      test('should add new node to queue', () => {
        let testQueue = new Queue;
        testQueue.enqueue(1);
        expect(testQueue).toEqual(1);
      });
    });
    describe('#dequeue', () => {
      test('should remove a node from queue', () => {
        let testQueue = new Queue;
        testQueue.enqueue(1);
        testQueue.enqueue(2);
        testQueue.dequeue();
        expect(testQueue).toEqual(2);
      });
    });
  });
});
