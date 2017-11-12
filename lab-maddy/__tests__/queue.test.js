'use strict';

const Queue = require('../lib/queue');

describe('Testing queue methods', () => {
  describe('queue methods', () => {
    describe('enqueue', () => {
      test('Should add new node to end of queue', () => {
        let testQueue = new Queue;
        testQueue.enqueue(1);
        expect(testQueue).toEqual(1);
      });
    });
    describe('dequeue', () => {
      test('should remove first node at front of queue', () => {
        let testQueue = new Queue;
        testQueue.enqueue(1);
        testQueue.enqueue(2);
        testQueue.dequeue();
        expect(testQueue).toEqual(2);
      });
    });
  });
});
