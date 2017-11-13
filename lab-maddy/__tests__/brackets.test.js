'use strict';

const brackets = require('../lib/brackets');

describe('testing the bracket function', () => {
  describe('Bracket function', () => {
    describe('Balanced brackets', ()=> {
      test('Should return true if brackets are balanced', () => {
        expect(brackets.isItBalanced('{[]}')).toBe(true);
      })
    })
    describe('Balanced brackets', ()=> {
      test('Should return true if brackets are balanced', () => {
        expect(brackets.isItBalanced('({[[]]})')).toBe(true);
      })
    })
    describe('Balanced brackets', ()=> {
      test('Should return true if brackets are balanced', () => {
        expect(brackets.isItBalanced('([])')).toBe(true);
      })
    })
    describe('Unbalanced brackets', ()=> {
      test('Should return false if brackets are unbalanced', () => {
        expect(brackets.isItBalanced('[]}')).toBe(false);
      })
    })
    describe('Unbalanced brackets', ()=> {
      test('Should return false if brackets are unbalanced', () => {
        expect(brackets.isItBalanced('((([]}')).toBe(false);
      })
    })
    describe('Unbalanced brackets', ()=> {
      test('Should return false if brackets are unbalanced', () => {
        expect(brackets.isItBalanced('{{][]}')).toBe(false);
      })
    })
  })
})
