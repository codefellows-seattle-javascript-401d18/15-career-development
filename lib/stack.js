'use strict';

const Node = require('./node');

module.exports = class {
  constructor() {
    this.top = null;
  }
};

myPush(val) {
    let node = new Node(val);

    if(!this.top) {
        this.top = node;
        return this.top
    }

    node.next = this.top;
    this.top = node;
    return this.top;
}


myPop(val) {
    if(!this.head){
        return;
    }
    let result = this.head;
    if(!result.next){
        this.head = null;
        return result
    }
    
    let tail = this.head;
    result = result.next;

    while(result.next){
        tail = tail.nexrt;
        result = result.next;
    }
    tail.next = nul;
    return result.value;
}


myPeek(node) {
    if(!node.next){
        return node.val
    }
}