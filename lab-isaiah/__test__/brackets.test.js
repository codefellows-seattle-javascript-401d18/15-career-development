'use strict';

const bracket = require('../lib/bracket');

describe('Bracket methods', () => {
  describe('#BRACKET', () => {
    describe('#BALANCED BRACKETS', () => {
      test('should return true if brackets are balanced', () => {
        expect(bracket.reflection('[{}]')).toBe(true);
      });
    });
    describe('#BALANCED BRACKETS', () => {
      test('should return true if brackets are balanced', () => {
        expect(bracket.reflection('({[[]]})')).toBe(true);
      });
    });
    describe('#BALANCED BRACKETS', () => {
      test('should return true if brackets are balanced', () => {
        expect(bracket.reflection('([])')).toBe(true);
      });
    });

    describe('#UNBALANCED BRACKETS', () => {
      test('should return false if brackets are unbalanced', () => {
        expect(bracket.reflection('[]}')).toBe(true);
      });
    });
    describe('#UNBALANCED BRACKETS', () => {
      test('should return false if brackets are unbalanced', () => {
        expect(bracket.reflection('((([]}')).toBe(true);
      });
    });
    describe('#UNBALANCED BRACKETS', () => {
      test('should return false if brackets are unbalanced', () => {
        expect(bracket.reflection('{{][]}')).toBe(true);
      });
    });
  });
});
