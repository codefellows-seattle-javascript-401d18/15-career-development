'use-strict';

const brackets = require('../lib/brackets');

describe('Testing bracket methods', () => {
  describe('#brackets function', () => {
    describe('#balanced brackets', () => {
      test('should return true if brackets are balanced', () => {
        expect(brackets.areTheyBalanced('{[]}')).toBe(true);
      });
    });
    describe('#balanced brackets', () => {
      test('should return true if brackets are balanced', () => {
        expect(brackets.areTheyBalanced('({[[]]})')).toBe(true);
      });
    });
    describe('#balanced brackets', () => {
      test('should return true if brackets are balanced', () => {
        expect(brackets.areTheyBalanced('([])')).toBe(true);
      });
    });
    describe('#unbalanced brackets', () => {
      test('should return false if brackets are unbalanced', () => {
        expect(brackets.areTheyBalanced('[]}')).toBe(false);
      });
    });
    describe('#unbalanced brackets', () => {
      test('should return false if brackets are unbalanced', () => {
        expect(brackets.areTheyBalanced('((([]}')).toBe(false);
      });
    });
    describe('#unbalanced brackets', () => {
      test('should return false if brackets are unbalanced', () => {
        expect(brackets.areTheyBalanced('{{][]}')).toBe(false);
      });
    });
  });
});
