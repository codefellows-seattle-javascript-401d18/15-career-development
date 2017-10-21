'use strict';

const Node = require('./node');

const Stack = module.exports = class {
  constructor() {
    this.top = new Node;
  }
  // Big O(1)
  myPush(val) {
    let node = new Node(val);

    if(!this.top) {
      this.top = node;
      return this.top;
    }
    node.next = this.top;
    this.top = node;
    return this.top;
  }
  //Big O(1)
  myPop() {
    if (!this.top) return null;
    let temp = this.top.val;
    this.top = this.top.next;
    return temp;
  }
  //Big O(1)
  myPeek() {
    if (!this.top) return null;
    return this.top.val;
  }
};
