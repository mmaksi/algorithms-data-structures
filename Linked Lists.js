// 10 --> 5 --> 16

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(8);
// myLinkedList.printList();
myLinkedList.insert(2, 22);
// myLinkedList.printList();
myLinkedList.delete(2);
