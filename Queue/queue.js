class Queue {
    constructor() {
        this.items = []
    }

    //add a element in queue
    enqueue(e){
        this.items.push(e)
    }

    //remove first element in queue
    dequeue(){
        this.items.shift()
    }

    isEmpty(){
        return this.items.length === 0
    }

    // return the first element
    peek(){
        if(!this.isEmpty()) {
            return this.items[0]
        }
        return null
    }

    size(){
        return this.items.length
    }

    print(){
        console.log(this.items.toString());
    }

}

const queue = new Queue()

console.log(queue.isEmpty());
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.size());
queue.print()

queue.dequeue()
queue.print()
console.log(queue.peek());