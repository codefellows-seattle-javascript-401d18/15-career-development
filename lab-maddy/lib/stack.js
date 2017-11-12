'use strict';

const Node = require('./node');

module.exports = class {
  constructor() {
    this.top = null;
  }

//Big-O runtime of O(1)
  push(val) {
    let node = new Node(val);

    if(!this.top) {
      this.top = node;
      return this.top;
    }

    node.next = this.top
    this.top = node
    return this.top
  }

//Big-O runtime of O(1)
  pop() {
    if(!this.top) return null;
    let temp = this.top.val;
    this.top = this.top.next;
    return temp;
  }

  //Big-O runtime of O(1)
  peek() {
    if(!this.top) return null;
    return this.top.val;
  }
}
