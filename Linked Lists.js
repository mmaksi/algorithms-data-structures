// 10 --> 5 --> 16

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class SinglyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
  }

  append(value) {
    const newNode = new Node(value);
    // Changing the pointer of the current tail
    this.tail.next = newNode;
    // Setting the new tail
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const output = [];
    let currentNode = this.head;
    while (currentNode) {
      output.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return output;
  }

  insert(index, value) {
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }

  delete(index) {
    const leader = this.traverseToIndex(index - 1);
    const node = leader.next;
    const holdingPointer = node.next;
    leader.next = holdingPointer;
    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    const values = this.printList();
    let currentNode = this.head;
    while (currentNode.value !== values[index]) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    // Changing the pointer of the current tail
    this.tail.next = newNode;
    // Setting the new tail
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const output = [];
    let currentNode = this.head;
    while (currentNode) {
      output.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return output;
  }

  insert(index, value) {
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = holdingPointer;
    holdingPointer.prev = newNode;
    this.length++;
    return this.printList();
  }

  delete(index) {
    const leader = this.traverseToIndex(index - 1);
    const node = leader.next;
    const holdingPointer = node.next;
    leader.next = holdingPointer;
    this.length--;
    return this.printList();
  }

  traverseToIndex(index) {
    const values = this.printList();
    let currentNode = this.head;
    while (currentNode.value !== values[index]) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  lookup(index) {
    const values = this.printList();
    let currentNode = this.head.next;
    while (currentNode.value !== values[index]) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  reverze() {
    let head = this.head;
    let tail = this.tail;
    this.head = tail;
    this.tail = head;

    const values = this.printList();
    let currentNode = traverseToIndex(values.length - 1);
    // this.head.next =
    // while(currentNode.value !== this.head.value) {

    // }
  }

  reverse() {
    let index = 0;
    const values = this.printList();
    const prevHead = this.head;
    this.head = prevHead;
    const prevTail = this.tail;

    while (index < values.length - 1) {
      let node = this.traverseToIndex(index);
      this.head.next = node;
      index++;
    }

    return this.printList();
  }
}

const myLinkedList = new DoublyLinkedList(5);
myLinkedList.append(10);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.insert(1, 20);
myLinkedList.insert(2, 25);
// myLinkedList.printList();
myLinkedList.reverse();
