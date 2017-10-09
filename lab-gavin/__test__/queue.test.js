'use-strict';

const Queue = require('../lib/queue');


describe('Testing queue methods', () => {
  // beforeAll(() => {
  // });
  describe('#QUEUE methods', () => {
    describe('#ENQUEUE', () => {
      test('should add new node to queue stack in the back', () => {
        let testQ = new Queue;
        testQ.enqueue(1);
        expect(testQ).toEqual(1);
      });
    });
    describe('#DEQUEUE', () => {
      test('should remove the oldest node in the front of the line', () => {
        let testQ = new Queue;
        testQ.enqueue(1);
        testQ.enqueue(2);
        testQ.dequeue();
        expect(testQ).toEqual(2);
      });
    });
  });
});
