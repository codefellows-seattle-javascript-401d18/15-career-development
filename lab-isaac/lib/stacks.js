'use strict';

const Node = require('./node');

module.exports = class {
  constructor() {
    this.top = null;
    // this.maxSize = maxSize || null
    // this.size = 0
  }

  push(val) {
    let node = new Node(val);

    if(!this.top) {
      this.top = node;
      return this.top;
    }

    node.next = this.top;
    this.top = node;
    return this.top;
  }

  pop() {
    if(!this.top) return null;
    let popped = this.top;
    let tmp = this.top.next;
    this.top.next = null;
    this.top = tmp;
    return popped;
  }

  peek() {
    if(!this.top) return null;
    return this.top;
  }
};
