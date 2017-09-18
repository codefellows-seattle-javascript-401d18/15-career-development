'use strict';
const Node = require('./node');

module.exports = class {
  constructor () {
    let node = new Node;
    this.top = node;
    this.maxSize = 10;
    //note: could also have this.maxSize = max.Size || null
    //Also could have: this.size = 0;
  }

  //Big O runtime: O(1)
  ourPush(val) {
    let node = new Node(val);

    if (!this.top) {
      this.top = node;
      return this.top;
    }

    node.next = this.top;
    this.top = node;
    return this.top;
  }

  //Big O runtime: O(1)
  ourPop(val) {
    if (!this.top) return this.top = null;

    let poppedOff = this.top;
    this.top = this.top.next;
    return poppedOff;
  }

  //Big O runtime: O(1)
  ourPeek(val) {
    if (!this.top) return null;
    return this.top;
  }
  //reverse polish notation using your stack = bonus point;
};
