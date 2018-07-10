'use strict';

const Node = require('./node');

module.exports = class {
  constructor() {
    this.top = null;
  }
  // O()
  sqpush(val) {
    let node = new Node(val);

    if(!this.top) {
      this.top = node;
      return this.top;
    }

    node.next = this.top;
    this.top = node;
    return this.top;
  }
  // O(n)
  sqpop() {
    if(!this.head){
      return;
    }
    let result = this.head;
    if(!result.next){
      this.head = null;
      return result;
    }

    let tail = this.head;
    result = result.next;

    while(result.next){
      tail = tail.next;
      result = result.next;
    }

    tail.next = null;
    return result.value;

  }
  // O(1)
  sqpeek(node) {
    if(!node.next){
      return node.val;
    }
  }
};
