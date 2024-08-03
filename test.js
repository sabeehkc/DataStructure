class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root == null
    }

    insert(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root, node){
        if(node.value < root.value){
            if(root.left == null){
                root.left = node
            }else{
                this.insertNode(root.left, node)
            }
        }else{
            if(root.right == null){
                root.right = node
            }else{
                this.insertNode(root.right, node)
            }
        }
    }

    search(root = this.root,value){
        if(!root){
            return -1
        }else{
            if(root.value == value){
                return true
            }else if(value < root.value){
                return this.search(root.left, value)
            }else{
                return this.search(root.right, value)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root,value){
        if(root == null){
            return root
        }

        if(value < root.value){
            root.left = this.deleteNode(root.left, value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value)
        }else{
            if(!root.left && !root.right){
                return null
            }

            if(!root.left){
                return root.right
            }

            if(!root.right){
                return root.left
            }

            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right , root.value)
        }
        return root
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
            
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

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
            
        }
    }

    levelOrder(){
        let queue = []
        queue.push(this.root)
        while(queue.length){
            let current = queue.shift()
            console.log(current.value);

            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
            
        }
    }

    findLargest(root){
        while(root.right !== null){
            root = root.right
        }
        return root
    }

    findSecondLargest(root){
        if(!root || (!root.left && !root.right)){
            return null
        }

        let current = root
        while(current){
            if(current.left && !current.right){
                return this.findLargest(root.left)
            }

            if(root.right && !root.right.left && !root.right.right){
                return root
            }

            current = root.right
        }
    }

    findSecondSmallest(root){
        if(!root || (!root.left && !root.right)){
            return null
        }

        let current = root
        while(current){
            if(current.right && !current.left){
                while(current.right.left !== null){
                    root = root.right.left
                }
                return root.right
            }

            if(current.left && !current.left.left && !current.left.right){
                return current
            }

            current = current.left
        }
    }

    heightofTree(root){
        if(!root){
            return 0
        }

        const leftHeight = this.heightofTree(root.left)
        const rightHeight = this.heightofTree(root.right)

        return Math.max(leftHeight + rightHeight) + 1 ; 
    }

    isBst(root){
        let arr = this.inOrder(root)
        for(let i=1;i<arr.length;i++){
            if(arr[i] <arr[i-1]){
                return false
            }    
        }
        return true
    }

    findClosestValue(target, root = this.root , closest = null){
        if(root == null){
            return closest
        }

        if(closest == null || Math.abs(root.value - target) < Math.abs(closest - target)){
            closest = root.value
        }

        if(target < root.value){
            return this.findClosestValue(target , root.left, closest)
        }else if(target > root.value){
            return this.findClosestValue(target, root.right, closest)
        }else{
            return closest
        }

    }

    findSmallestParent(root = this.root){
        if(root == null || (root.left == null && root.right == null)){
            return null
        }

        let parent =null
        let current = this.root

        while(current.left !== null){
            parent = current
            current = current.left
        }
        return parent
    }

}

let bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(2)
bst.insert(5)
bst.insert(13)
bst.insert(22)
bst.insert(1)

// bst.delete(13)

console.log(bst.inOrder(bst.root));

// bst.postOrder(bst.root)

bst.levelOrder()

console.log(bst.isBst(bst.root));

console.log(bst.findClosestValue(17));

console.log(bst.findSmallestParent().value);

