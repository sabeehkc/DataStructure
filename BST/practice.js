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

    inOrder(root,result = []) {
        if (root) {
            this.inOrder(root.left , result);
            result.push(root.value)
            this.inOrder(root.right, result);
        }
        return result
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
            return null; 
        }

        let current = root;
        while (current) {
            
            if (current.left && !current.right) {
                return this.findLargest(current.left);
            }

            if (current.right && !current.right.left && !current.right.right) {
                return current;
            }

            current = current.right;
        }
    }

    findSeondSmallest(root){
        if(!root || (!root.left && !root.right)){
            return null
        }

        let current = root
        while(current){

            if (current.right && !current.left) {
                while (current.right.left !== null) {
                    current = current.right.left;
                }
                return current.right;
            }

            if(current.left && !current.left.left && !current.left.right){
                return current
            }

            current = current.left
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

    isBst(root){
        let arr=this.inOrder(root)
        for(let i=1;i<arr.length;i++){
            if(arr[i]<arr[i-1]){return false}
        }
        return true
    }

    heightOfTree(root) {
        if (root === null) {
            return 0;
        }

        const leftHeight = this.heightOfTree(root.left);
        const rightHeight = this.heightOfTree(root.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }

    findClosestValue(target, root = this.root, closest = null) {
        if (root === null) {
            return closest;
        }
        if (closest === null || Math.abs(root.value - target) < Math.abs(closest - target)) {
            closest = root.value;
        }
        if (target < root.value) {
            return this.findClosestValue(target, root.left, closest);
        } else if (target > root.value) {
            return this.findClosestValue(target, root.right, closest);
        } else {
            return closest;
        }
    }

    findSmallestParent() {
        if (this.root === null || (this.root.left === null && this.root.right === null)) {
            return null; 
        }

        let current = this.root;
        let parent = null;

        while (current.left !== null) {
            parent = current;
            current = current.left;
        }

        return parent;
    }

    isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;

        if (num % 2 === 0 || num % 3 === 0) return false;

        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }

        return true;
    }

    // Find all prime numbers in the BST
    findPrimes(root, primes = []) {
        if (root) {
            this.findPrimes(root.left, primes);
            if (this.isPrime(root.value)) {
                primes.push(root.value);
            }
            this.findPrimes(root.right, primes);
        }
        return primes;
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

bst.levelOrder(); 

console.log(bst.isBst()); 

const primes = bst.findPrimes(bst.root);
console.log("Prime numbers in the BST:", primes);
