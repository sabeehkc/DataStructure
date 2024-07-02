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

    push(element) {
        this.stack.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return null;
        }
        return this.stack.pop();
    }

    reverseString(str) {

        for(let char of str){
            this.stack.push(char)
        }

        let reversedStr = '';
        while(!this.isEmpty()){
            reversedStr += this.stack.pop()
        }

        return reversedStr
    }
}

const stack = new Stack()

let str = "Hello World"
console.log(stack.reverseString(str));