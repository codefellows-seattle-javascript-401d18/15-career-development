'use strict';

const Queue = require('../lib/queue');

describe('Testing queue methods', () => {
  describe('#queue methods', () => {
    describe('#enqueue', () => {
      test('Should add new node to end of queue', () => {
        let testQueue = new Queue;
        testQueue.enqueue(1)[1];
        let result = testQueue.dequeue()[1];
        expect(result).toEqual(1); //testQueue.dequeue = result = {"next": null, "val": 1}
      });
    });
    describe('#dequeue', () => {
      test('Should remove first node at front of queue', () => {
        let testQueue = new Queue;
        testQueue.enqueue(1);
        testQueue.enqueue(2);
        testQueue.enqueue();
        let result = testQueue.dequeue();
        expect(result).toEqual(2);
      });
    });
  });
});
