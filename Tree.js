var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return TreeNode;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.insert = function (value) {
        var newNode = new TreeNode(value);
        // Check if root is null
        // Set root to current node
        if (!this.root) {
            this.root = newNode;
        }
        else {
            var currentNode = this.root;
            while (currentNode.value) {
                if (value === currentNode.value) {
                    console.log('Duplicates not allowed');
                }
                else if (value > currentNode.value) {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        currentNode = currentNode.right;
                    }
                    else {
                        currentNode = currentNode.right;
                    }
                }
                else if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        currentNode = currentNode.left;
                    }
                    else {
                        currentNode = currentNode.left;
                    }
                }
                break;
            }
        }
        return this;
    };
    return BinarySearchTree;
}());
var tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree);
// JSON.stringify(traverse(tree.root));
// function traverse(node: TreeNode) {
//   const tree = { value: node.value };
//   tree.left = node.left === null ? null : traverse(node.left);
//   tree.right = node.right === null ? null : traverse(node.right);
//   return tree;
// }
