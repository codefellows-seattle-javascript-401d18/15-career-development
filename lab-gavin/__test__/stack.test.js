'use-strict';


const Stack = require('../lib/stack');


describe('Testing stack methods', () => {
  // beforeAll(() => {
  // });
  describe('#STACK methods', () => {
    describe('#PUSH', () => {
      test('should add new node to the top of the stack', () => {
        let testStack  = new Stack;
        testStack.push('Gavin');
        testStack.push('Eugene');
        testStack.push('Thomas');
        expect(testStack).toEqual('Eugene');
      });
    });
    describe('#POP', () => {
      test('should remove the node from the top of the stack', () => {
        let testStack  = new Stack;
        testStack.push('Gavin');
        testStack.push('Eugene');
        testStack.push('Thomas');
        testStack.pop();
        expect(testStack).toEqual({name: 'Thomas'});
      });
    });
    describe('#PEAK', () => {
      test('should return value of the node on the top of the stack', () => {
        let testStack  = new Stack;
        testStack.push('Gavin');
        testStack.push('Eugene');
        testStack.push('Thomas');
        expect(testStack.peek()).toEqual('Thomas');
      });
    });
  });
});
