class Queue {
    constructor(){
        this.queue = []
    }

    enqueue(element) {
        this.queue.push(element)
    }

    dequeue() {
        if(this.isEmpty()) {
            return null
        }
        return this.queue.shift()
    }

    isEmpty(){
        return this.queue.length === 0
    }

    size(){
        return this.queue.length
    }

    display() {
        console.log(this.queue);
    }

    removePrime(){
        if(this.isEmpty()){
            return null;
        }
        const front = this.dequeue();
        if(!this.isPrime(front)) {
            this.removePrime()
            this.enqueue(front)
        } else {
            console.log("Prime number:",front);
            this.removePrime();
        }
    }

    isPrime(number) {
        if(number <= 1){
            return false
        }

        for(let i=2;i<Math.sqrt(number);i++){
            if(number % i === 0){
                return false
            }
        }
        return true
    }
}

const queue = new Queue();

queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6)

console.log("Original queue");
queue.display()

console.log("Prime numbers");
queue.removePrime()

console.log("Queue after removing prime numbers:");
queue.display()