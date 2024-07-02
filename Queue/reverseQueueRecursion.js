class Queue {
    constructor(){
        this.queue = []
    }

    enqueue(element) {
        this.queue.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }

        return this.queue.shift()
    }

    isEmpty(){
        return this.queue.length === 0
    }

    display() {
        console.log(this.queue);
    }

    reverse() {
        if(this.isEmpty()) {
            return null
        }
        const front = this.dequeue()
        this.reverse()
        this.enqueue(front)
    }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log("Original queue:");
queue.display();

queue.reverse();

console.log("Reversed queue:");
queue.display();