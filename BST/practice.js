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

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    max(root) {
        if (!root.right) {
            return root.value;
        } else {
            return this.max(root.right);
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
    }

    deleteNode(root, value) {
        if (root === null) {
            return root;
        }

        if (value < root.value) {
            root.left = this.deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) {
                return null;
            }

            if (!root.left) {
                return root.right;
            }
            if (!root.right) {
                return root.left;
            }
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    findLargest(root) {
        while (root.right !== null) {
            root = root.right;
        }
        return root;
    }

    findSecondLargest(root) {
        if (!root || (!root.left && !root.right)) {
            return null; // Tree must have at least 2 nodes
        }

        let current = root;
        while (current) {
            // Case 1: Current node is the largest and has a left subtree
            // The second largest is the largest in that left subtree
            if (current.left && !current.right) {
                return this.findLargest(current.left);
            }

            // Case 2: Current node is parent of the largest node, and the largest node has no children
            // The current node is the second largest
            if (current.right && !current.right.left && !current.right.right) {
                return current;
            }

            current = current.right;
        }
    }

    levelOrder() {
        const queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value);
            if (curr.left) {
                queue.push(curr.left);
            }
            if (curr.right) {
                queue.push(curr.right);
            }
        }
    }

    isBST(node = this.root, min = null, max = null) {
        if (node === null) {
            return true;
        }

        if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
            return false;
        }

        return this.isBST(node.left, min, node.value) && this.isBST(node.right, node.value, max);
    }

    heightOfTree(root) {
        if (root === null) {
            return 0;
        }

        // Recursively find the height of the left and right subtrees
        const leftHeight = this.heightOfTree(root.left);
        const rightHeight = this.heightOfTree(root.right);

        // Height of the tree is the maximum of left and right subtree heights plus 1 (for the root node)
        return Math.max(leftHeight, rightHeight) + 1;
    }
}

// Test cases
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(5);
bst.insert(13);
bst.insert(22);
bst.insert(1);


console.log("Height",bst.heightOfTree(bst.root));

bst.levelOrder();  // Should print the tree in level order
console.log(bst.isBST()); 