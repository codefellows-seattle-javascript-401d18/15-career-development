'use-strict';


const Stack = require('../lib/stack');


describe('Testing stack methods', () => {
  describe('#STACK methods', () => {
    describe('#PUSH', () => {
      test('should add new node to the top of the stack', () => {
        let testStack  = new Stack;
        testStack.myPush('Steve');
        testStack.myPush('Frank');
        testStack.myPush('Marla');
        expect(testStack).toEqual('Frank');
      });
    });
    describe('#POP', () => {
      test('should remove the node from the top of the stack', () => {
        let testStack  = new Stack;
        testStack.myPush('Steve');
        testStack.myPush('Frank');
        testStack.myPush('Marla');
        let result = testStack.myPop();
        expect(result).toEqual('Marla');
      });
    });
    describe('#PEAK', () => {
      test('should return value of the node on the top of the stack', () => {
        let testStack  = new Stack;
        testStack.myPush('Steve');
        testStack.myPush('Frank');
        testStack.myPush('Marla');
        expect(testStack.myPeek()).toEqual('Marla');
      });
    });
  });
});