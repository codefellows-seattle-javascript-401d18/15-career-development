'use strict';

const Node = require('./node');

module.exports = class {
  constructor() {
    this.first = null;
  }
  // O(n)
  enqueue(val) {
    let node = new Node(val);
    let lastNode;

    if(!this.first) {
      this.first = node;
      return this.first;
    }

    _findBack(this.first);
    lastNode.next = node;
    return node;

    // O(n)
    function _findBack(node) {
      if(!node) return;
      lastNode = node;
      _findBack(node.next);
    }
  }
  // O(n)
  dequeue() {
    if(!this.first) return null;
    let temp = this.first;
    this.first = this.first.next;
    temp.next = null;
    return temp;
  }
};
