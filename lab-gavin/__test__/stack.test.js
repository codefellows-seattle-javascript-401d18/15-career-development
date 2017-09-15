'use-strict';


const Stack = require('../lib/stack');


describe('Testing stack methods', () => {
  // beforeAll(() => {
  // });
  describe('#STACK methods', () => {
    describe('#PUSH', () => {
      test('should add new node to the top of the stack', () => {
        let testStack  = new Stack;
        testStack.myPush({name: 'Gavin'});
        testStack.myPush({name: 'Eugene'});
        testStack.myPush({name: 'Thomas'});
        expect(Stack[1]).toEqual({name: 'Eugene'});
      });
    });
    xdescribe('#POP', () => {
      test('should remove the node from the top of the stack', () => {
        let testStack  = new Stack;
        testStack.myPush({name: 'Gavin'});
        testStack.myPush({name: 'Eugene'});
        testStack.myPush({name: 'Thomas'});
        testStack.myPop();
        expect(testStack[1]).toEqual({name: 'Thomas'});
      });
    });
    xdescribe('#PEAK', () => {
      test('should return value of the node on the top of the stack', () => {
        let testStack  = new Stack;
        testStack.myPush({name: 'Gavin'});
        testStack.myPush({name: 'Eugene'});
        testStack.myPush({name: 'Thomas'});
        expect(testStack.myPeek()).toEqual({name: 'Thomas'});
      });
    });
  });
});
