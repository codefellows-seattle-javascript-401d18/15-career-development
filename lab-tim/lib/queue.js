'use strict';

const Node = require('./node');

const Queue = module.exports = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  myEnqueue(val) {
    let node = new Node(val);
    if(!this.head) {
      this.head = this.tail = node;
      return node;
    }

    this.tail.next = node;
    this.tail = node;
    return this.tail;
  }

  myDequeue() {
    if(!this.head) return null;
    if(this.head == this.tail) this.head = this.tail = null;
    else {
      let temp = this.head;
      this.head = temp.next;
      temp.next = null;
      return temp;
    }
  }
};
