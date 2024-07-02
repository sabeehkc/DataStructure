class Stack {
    constructor() {
        this.stack = [];
    }

   
    push(element) {
        this.stack.push(element);
    }

   
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stack.pop();
    }

    
    isEmpty() {
        return this.stack.length === 0;
    }

    
    size() {
        return this.stack.length;
    }

   
    display() {
        console.log(this.stack);
    }

    
    reverse() {
        if (this.isEmpty()) {
            return;
        }
        const top = this.pop(); 
        this.reverse(); 
        this.insertAtBottom(top); 
    }

   
    insertAtBottom(element) {
        if (this.isEmpty()) {
            this.push(element);
        } else {
            const top = this.pop(); 
            this.insertAtBottom(element);
            this.push(top); 
        }
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);


console.log("Original stack:");
stack.display();

stack.reverse();

console.log("Reversed stack:");
stack.display();