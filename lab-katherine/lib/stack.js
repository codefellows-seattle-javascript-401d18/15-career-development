'use strict';

const Node = require('./node');

module.exports = class {
  constructor () {
    this.top = null;
  }

  push(val) {
    let node = new Node(val);

    if (!this.top) {
      this.top = node;
      return this.top;
    }

    node.next = this.top;
    this.top = node;
    return this.top;
  }

  pop() {
    if (!this.top) return null;

    let result = this.top;
    if(!result.next) {
      this.top = null;
      return result;
    }

    let tail = this.top;
    result = result.next;

    while(result.next){
      tail = tail.next;
      result = result.next;
    }

    tail.next = null;
    return result.value;
  }

  peek() {
    if (!this.top) return null;
    return this.top;
  }
};
