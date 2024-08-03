function largest(root) {
    while (root.right !== null) {
        root = root.right;
    }
    return root;
}

function secondLargest(root) {
    if (!root || (!root.left && !root.right)) {
        return null;
    }

    let current = root;
    while (current) {
        if (current.left && !current.right) {
            return largest(current.left);
        }

        if (current.right && !current.right.left && !current.right.right) {
            return current;
        }

        current = current.right;
    }
}

function secondSmallest(root) {
    if (!root || (!root.left && !root.right)) {
        return null;
    }

    let current = root;
    while (current) {
       
        if (current.right && !current.left) {
            while (current.right.left !== null) {
                current = current.right.left;
            }
            return current.right;
        }

      
        if (current.left && !current.left.left && !current.left.right) {
            return current;
        }

        current = current.left;
    }
}

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Example of creating a BST
let root = new TreeNode(20);
root.left = new TreeNode(10);
root.right = new TreeNode(30);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(15);
root.right.right = new TreeNode(40);

let secondLargestNode = secondLargest(root);
let secondSmallestNode = secondSmallest(root);

let sum = 0;

if (secondLargestNode) {
    sum += secondLargestNode.value;
}
console.log("Second Largest:",secondLargestNode.value)

if (secondSmallestNode) {
    sum += secondSmallestNode.value;
}
console.log("Second Smallest:",secondSmallestNode.value)

console.log("Sum:",sum);
