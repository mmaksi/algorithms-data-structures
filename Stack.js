// Implementing a stack as a linked list
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.bottom = this.top = newNode;
      this.length++;
      return this;
    }
    this.top.next = newNode;
    this.top = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) return null;
    if (this.top === this.bottom) this.bottom = null;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  isEmpty() {
    if (this.bottom === null) return true;
    return false;
  }
}

// Implementing a stack as an array
class ArrayStack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }
  isEmpty() {
    if (this.bottom === null) return true;
    return false;
  }
}

const st = new Stack();
st.push(1);
st.push(2);
st.push(3);
st.peek();
