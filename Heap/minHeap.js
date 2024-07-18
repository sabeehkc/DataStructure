class Heap {
    constructor() {
        this.heap = [];
    }
    
    push(e) {
        this.heap.push(e);
        this.heapifyup();
    }

    heapifyup() {
        let current = this.heap.length - 1;
        while (current > 0) {
            let parent = Math.floor((current - 1) / 2);
            if (parent >= 0 && this.heap[parent] > this.heap[current]) {
                [this.heap[current], this.heap[parent]] = [this.heap[parent], this.heap[current]];
                current = parent;
            } else {
                break;
            }
        }
    }

    leftchild(i) {
        return 2 * i + 1;
    }

    rightchild(i) {
        return 2 * i + 2;
    }

    delete() {
        if (!this.heap.length) {
            return;
        }
        if (this.heap.length == 1) {
            return this.heap.pop();
        }
        let deleted = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifydown();
        return deleted;
    }

    heapifydown() {
        let current = 0;
        let len = this.heap.length;
        while (true) {
            let small = current;
            const leftChild = this.leftchild(current);
            const rightChild = this.rightchild(current);

            if (leftChild < len && this.heap[leftChild] < this.heap[small]) {
                small = leftChild;
            }
            if (rightChild < len && this.heap[rightChild] < this.heap[small]) {
                small = rightChild;
            }

            if (small !== current) {
                [this.heap[small], this.heap[current]] = [this.heap[current], this.heap[small]];
                current = small;
            } else {
                return;
            }
        }
    }

    heapsort(arr) {
        let sortheap = new Heap();
        arr.forEach(e => sortheap.push(e));

        let sorted = [];
        while (sortheap.heap.length) {
            sorted.push(sortheap.delete());
        }
        return sorted;
    }
}

// Testing the min-heap
let myheap = new Heap();

console.log(myheap.heap); // Should print an empty array []

myheap.delete(); // Should do nothing as the heap is empty
myheap.push(8);
myheap.push(3);
myheap.push(10);
myheap.push(11);
myheap.push(9);
myheap.push(7);
myheap.push(1);
myheap.push(4);
myheap.push(5);
console.log(myheap.heap); // Should print the heap array maintaining min-heap property

myheap.delete();
myheap.delete();
myheap.delete();
console.log(myheap.heap); // Should print the heap array after deleting three minimum elements

// Testing heapsort with a random array
console.log(myheap.heapsort([45, 23, 177, 654, 34, 2])); // Should print a sorted array [2, 23, 34, 45, 177, 654]