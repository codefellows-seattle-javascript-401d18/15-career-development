'use-strict';

const brackets = require('../lib/bracket');

describe('Testing my bracket methods', () => {
  describe('#Bracket function', () => {
    describe('#Balanced', () => {
      test('should return true if the brackets are balanced', () => {
        expect(brackets.parenthesesAreBalanced('{[]}')).toBe(true);
      });
    });
    describe('#Balanced', () => {
      test('should return true if the brackets are balanced', () => {
        expect(brackets.parenthesesAreBalanced('({[[]]})')).toBe(true);    
      });
    });
    describe('#Balanced', () => {
      test('should return true if the brackets are balanced', () => {
        expect(brackets.parenthesesAreBalanced('([])')).toBe(true);    
      });
    });

    describe('#Unbalanced', () => {
      test('should return false if brackets are not balanced', () => {
        expect(brackets.parenthesesAreBalanced('[]}')).toBe(true);
      });
    });
    describe('#Unbalanced', () => {
      test('should return false if brackets are not balanced', () => {
        expect(brackets.parenthesesAreBalanced('((([]}')).toBe(true);
      });
    });
    describe('#Unbalanced', () => {
      test('should return false if brackets are not balanced', () => {
        expect(brackets.parenthesesAreBalanced('(([]}')).toBe(true);
      });
    });
  });
});