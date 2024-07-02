class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
        this.size = 0
    }

    push(value) {
        const node = new Node(value)

        if(this.top){
            node.next = this.top
        }
        this.top = node
        this.size++
    }

    pop(){
        if(this.isEmpty()) {
            return null
        }

        const value = this.top.value
        this.top = this.top.next;
        this.size--
        return value
    }

    peek() {
        if(this.isEmpty()){
            console.log('empty');
            return null
        }
        return this.top.value
    }

    isEmpty(){
        return this.size === 0
    }

    display(){
        if(this.isEmpty()){
            console.log('Empty');
        }
        let current = this.top
        const values = [];
        while(current){
            values.push(current.value)
            current = current.next
        }
        console.log(values);
    }

    reverse(){
        if(!this.isEmpty()){
            const top = this.pop();
            this.reverse()
            this.insertAtBottom(top)
        }
    }

    insertAtBottom(value){
        if(this.isEmpty()){
            this.push(value)
        } else {
            const top = this.pop()
            this.insertAtBottom(value)
            this.push(top)
        }
    }
}

const stack = new Stack()

stack.push(7)
stack.push(6)
stack.push(5)
stack.push(4)
stack.push(3)
stack.push(2)
stack.push(1)

stack.display()

console.log(stack.peek()); 
stack.pop();
console.log(stack.peek()); 


stack.reverse();
stack.display();