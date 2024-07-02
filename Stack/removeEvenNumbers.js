class Stack {
    constructor() {
        this.stack = [];
    }

    isEmpty(){
        return this.stack.length === 0
    }

    size() {
        return this.stack.length
    }

    push(element) {
        this.stack.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack.pop();
    }

    peek() {
        if(this.isEmpty()){
            return null
        }
        return this.stack[this.stack.length - 1]
    }

    removeEvenNumbers(){
        const oddstack = []

        while(!this.isEmpty()){
            const topElement = this.pop();
            if(topElement % 2 !== 0){
                oddstack.push(topElement)
            }
        }

        while(oddstack.length){
            this.stack.push(oddstack.pop())
        }
    }

    display() {
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

stack.removeEvenNumbers()
stack.display()