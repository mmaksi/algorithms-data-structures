class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    // Check if root is null
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      // If the new node is > than the root
      if (value > currentNode.value) {
        while (value > currentNode.value) {
          if (currentNode.right !== null) {
            currentNode = currentNode.right;
          } else {
            currentNode.right = newNode;
          }
        }
        currentNode.left = newNode;
        return this
      }
      console.log("here");
      while (newNode.value < currentNode.value) {
        if (currentNode.left !== null) {
          currentNode = currentNode.left;
        } else {
          currentNode.left = newNode;
        }
      }
    }
    return this;
  }

  lookup(value) {}
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// JSON.stringify(traverse(tree.root));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
