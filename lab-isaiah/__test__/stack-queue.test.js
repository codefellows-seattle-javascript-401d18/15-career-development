'use-strict';

const Stack = require('../lib/stack');
const Queue = require('../lib/queue');

describe('Testing stack & queue methods', () => {
  describe('#STACK METHODS', () => {
    describe('#SQPUSH', () => {
      test('should add new node to the top of the stack', () => {
        let testStack  = new Stack;
        testStack.sqpush('Dragon');
        testStack.sqpush('Wizard');
        testStack.sqpush('Ninja');
        expect(testStack).toEqual('Ninja');
      });
    });
    describe('#SQPOP', () => {
      test('should remove the node from the top of the stack', () => {
        let testStack  = new Stack;
        testStack.sqpush('Dragon');
        testStack.sqpush('Wizard');
        testStack.sqpush('Ninja');
        let result = testStack.sqpop();
        expect(result).toEqual('Ninja');
      });
    });
    describe('#SQPEEK', () => {
      test('should return value of the node on the top of the stack', () => {
        let testStack  = new Stack;
        testStack.sqpush('Dragon');
        testStack.sqpush('Wizard');
        testStack.sqpush('Ninja');
        expect(testStack.sqpeek()).toEqual('Ninja');
      });
    });
  });

  describe('#QUEUE METHODS', () => {
    describe('#ENQUEUE', () => {
      test('should add new node to queue stack in the back', () => {
        let testQueue = new Queue;
        testQueue.enqueue(1);
        expect(testQueue).toEqual(1);
      });
    });
    describe('#DEQUEUE', () => {
      test('should remove the oldest node in the front of the line', () => {
        let testQueue = new Queue;
        testQueue.enqueue(1);
        testQueue.enqueue(2);
        testQueue.dequeue();
        expect(testQueue).toEqual(2);
      });
    });
  });
});
