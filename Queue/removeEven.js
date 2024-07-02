class Queue {
    constructor() {
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

    front() {
        if(this.isEmpty()){
            return null
        }
        return this.queue[0]
    }

    display() {
        console.log(this.queue);
    }

    revomeEven(){
        let oddQueue = []

        while(!this.isEmpty()){
            const front = this.dequeue();
            if(front % 2 !== 0){
                oddQueue.push(front)
            } 
        }

        while(oddQueue.length){
            this.enqueue(oddQueue.shift())
        }
    }


}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log("Original queue:");
queue.display();

queue.revomeEven()

console.log("Queue after removing even numbers:");
queue.display();