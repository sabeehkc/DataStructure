class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index){
        return Math.floor((index - 1) / 2)
    }

    getLeftChildIndex(index){
        return 2 * index + 1;
    }

    getRightChildIndex(index){
        return 2 * index + 2
    }

    swap(index1,index2){
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp();
    }

    heapifyUp(){
        let index = this.heap.length - 1;

        while(index > 0){
            const parentIndex = this.getParentIndex(index)
            if(this.heap[parentIndex] < this.heap[index]){
                this.swap(parentIndex,index);
                index = parentIndex
            } else {
                break;
            }
        }
    }

    extractMax(){
        if(this.heap.length === 0) {
            return null;
        }

        if(this.heap.length === 1){
            return this.heap.pop()
        }

        const max = this.heap[0];
        this.heap[0] = this.heap.pop()
        this.heapifyDown(0);
        return max
    }

    heapifyDown(index){
        const leftChildIndex = this.getLeftChildIndex(index)
        const rightChildIndex = this.getRightChildIndex(index)
        let largeIndex = index

        if(leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largeIndex]){
            largeIndex = leftChildIndex
        }

        if(rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largeIndex]){
            largeIndex = rightChildIndex
        }

        if(largeIndex !== index) {
            this.swap(index , largeIndex);
            this.heapifyDown(largeIndex);
        }
    }

    getMax(){
        return this.heap.length > 0 ? this.heap[0] : null;
    }
}

const maxHeap = new MaxHeap();

maxHeap.insert(3);
maxHeap.insert(1);
maxHeap.insert(6);
maxHeap.insert(5);
maxHeap.insert(2);
maxHeap.insert(4);

console.log(maxHeap.heap);
console.log("Max element:", maxHeap.getMax()); // Output: 6
console.log("Extracted max element:", maxHeap.extractMax()); // Output: 6
console.log("Max element after extraction:", maxHeap.getMax()); // Output: 5