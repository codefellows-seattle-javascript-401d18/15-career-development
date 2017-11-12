'use strict';

const Stack = require('../lib/stack');

describe('Testing stack methods', () => {
  describe('stack methods', () => {
    describe('push', ()=> {
      test('should add new node to stack', () => {
        let testStack = new Stack;
        testStack.push(10);
        testStack.push(20);
        testStack.push(30);
        let result = testStack.pop();
        expect(result).toEqual(30)
      });
    });
    describe('pop', () => {
      test('should remove node from stack', () => {
        let testStack = new Stack;
        testStack.push(1);
        testStack.push(2);
        testStack.push(3);
        let result = testStack.pop();
        expect(result).toEqual(3);
      });
    });
    describe('peek', () => {
      test('should return value of node on top of stack', () => {
        let testStack = new Stack;
        testStack.push(1);
        testStack.push(2);
        testStack.push(3);
        let result = testStack.peek();
        expect(result).toEqual(3);
      });
    });
  })
})
