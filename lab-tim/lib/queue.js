'use strict';

const Node = require('./node');

const Queue = module.exports = class {
  constructor() {
    this.front = null;
    this.back = null;
  }
  //Big O(1)
  myEnqueue(val) {
    let node = new Node(val);
    if(!this.front) {
      this.front = this.back = node;
      return node;
    }

    this.back.next = node;
    this.back = node;
    return this.back;
  }
  //Big O(1)
  myDequeue() {
    if(!this.front) return null;
    let temp = this.front;
    this.front = temp.next;
    temp.next = null;
    return temp.val;
  }
};
