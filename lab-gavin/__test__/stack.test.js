'use-strict';


const Stack = require('../lib/stack');


describe('Testing stack methods', () => {
  // beforeAll(() => {
  // });
  describe('#STACK methods', () => {
    describe('#PUSH', () => {
      test('should add new node to the top of the stack', () => {
        let testStack  = new Stack;
        testStack.myPush('Gavin');
        testStack.myPush('Eugene');
        testStack.myPush('Thomas');
        expect(testStack).toEqual('Eugene');
      });
    });
    describe('#POP', () => {
      test('should remove the node from the top of the stack', () => {
        let testStack  = new Stack;
        testStack.myPush('Gavin');
        testStack.myPush('Eugene');
        testStack.myPush('Thomas');
        let result = testStack.myPop();
        expect(result).toEqual('Thomas');
      });
    });
    describe('#PEAK', () => {
      test('should return value of the node on the top of the stack', () => {
        let testStack  = new Stack;
        testStack.myPush('Gavin');
        testStack.myPush('Eugene');
        testStack.myPush('Thomas');
        expect(testStack.myPeek()).toEqual('Thomas');
      });
    });
  });
});
