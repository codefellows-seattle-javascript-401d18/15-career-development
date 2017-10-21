'use strict';

const Node = require('./node');

const Stack = module.exports = class {
  constructor() {
    this.top = null;
  }

  myPush(val) {
    let node = new Node(val);

    if(!this.top) {
      this.top = node;
      return node;
    }
    node.next = this.top;
    this.top = node;
    return this.top;
  }

  myPop() {
    if(!this.top) return null;
    let temp = this.top.val;
    this.top = this.top.next;
    return temp;
  }

  myPeek() {
    return this.top;
  }
};
