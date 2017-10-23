'use-strict';

const Stack = require('../lib/stack');

describe('Testing stack methods', () => {
  describe('#stack methods', () => {
    describe('#push', () => {
      test('should add new node to stack', () => {
        let testStack  = new Stack;
        testStack.myPush(10);
        testStack.myPush(20);
        testStack.myPush(30);
        let result = testStack.myPop();
        expect(result).toEqual(30);
      });
    });
    describe('#pop', () => {
      test('should remove node from stack', () => {
        let testStack  = new Stack;
        testStack.myPush(1);
        testStack.myPush(2);
        testStack.myPush(3);
        let result = testStack.myPop();
        expect(result).toEqual(3);
      });
    });
    describe('#peak', () => {
      test('should return value of node on top of stack', () => {
        let testStack  = new Stack;
        testStack.myPush(1);
        testStack.myPush(2);
        testStack.myPush(3);
        expect(testStack.myPeek()).toEqual(3);
      });
    });
  });
});
