class Queue {
    constructor(){
        this.item = []
    }

    isEmpty(){
        return this.item.length === 0
    }

    enqueue(element){
        this.item.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            return null
        }

        return this.item.shift()
    }

    peek(){
        if(this.isEmpty()){
            return null
        }

        return this.item[0]
    }


    isPrime(number) {
        if(number <= 1){
            return false
        }

        for(let i=2; i< Math.sqrt(number);i++){
            if(number % i === 0){
                return false
            }
        }
        return true
    }

    removePrime(){
        if(this.isEmpty()){
            return null
        }

        const front = this.dequeue()
        if(!this.isPrime(front)){
            this.removePrime()
            this.enqueue(front)
        } else {
            console.log("Prime number:", front);
            this.removePrime()
        }
    }

    removeEven(){
        let oddArray = []
        while(!this.isEmpty()){
            const front = this.dequeue()
            if(front % 2 !==0){
                oddArray.push(front)
            }
        }

        while(oddArray.length){
            this.enqueue(oddArray.shift())
        }
    }


    reverse(){
        if(this.isEmpty()){
            return null
        }
        const front = this.dequeue()
        this.reverse()
        this.enqueue(front)
    }

    
    print() {
        console.log(this.item.toString());
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
queue.print()

queue.removeEven()
queue.reverse()
queue.print()

// console.log("Prime numbers");
// queue.removePrime()

// console.log("Queue after removing prime numbers:");
// queue.print()