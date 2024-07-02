class Stack {
    constructor(){
        this.stack = []
    }

    isEmpty(){
        return this.stack.length === 0
    }

    size() {
        return this.stack.length
    }

    //add element in to stack
    push(element) {
        this.stack.push(element)
    }

    //remove last element in to stack
    pop() {
        if(this.isEmpty()) {
            return null
        }
        return this.stack.pop()
    }


    //check number is prime or not
    isPrime(number){
        if(number <= 1 ){
            return false
        }
        for(let i=2;i<=Math.sqrt(number);i++){
            if(number % i === 0){
                return false
            }
        }
        return true
    }

    //remove prime number from the stack using recursion
    removePrimes(){
        if(this.isEmpty()){
            return;
        }
        const top = this.pop();
        if(!this.isPrime(top)){
            this.removePrimes();
            this.push(top)
        } else {
            console.log("Prime number:", top);
            this.removePrimes();
        }
    }

    display(){
        console.log(this.stack);
    }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.push(6)

stack.display()

stack.removePrimes()
stack.display()


