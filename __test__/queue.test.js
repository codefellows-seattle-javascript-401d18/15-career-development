'use-strict';

const Queue = require('../lib/queue');
'use-strict';

describe('Testing my queue methods', () => {
  describe('Queue methods', () => {
    describe('Enqueue', () => {
      test('should add new node to queue', () =>{
        let testQueue = new Queue;
        testQueue.enqueue(1);
        expect(testQueue).toEqual(1);
      });
    });
    describe('#Dequeue', () => {
      test('should remove the oldest node in the front', () => {
        let testQueue = new Queue;
        testQueue.enqueue(1);
        testQueue.enqueue(2);
        testQueue.dequeue();
        expect(testQueue).toEqual(2);
      });
    });
  });
});