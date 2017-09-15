'use-strict';

const Node = require('./node');


describe('Testing queue and stack methods', () => {
  // beforeAll(() => {
  // });
  describe('#QUEUE methods', () => {
    test('should add new node to queue stack in the back', () => {
      let node = new Node();
      node.enqueue({name: 'Gavin'});
      node.enqueue({name: 'Eugene'});
      node.enqueue({name: 'Thomas'});
      expect(node[1]).toEqual({name: 'Eugene'});
    });



  });
});
