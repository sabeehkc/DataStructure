class Stack {
    constructor(){
        this.stack = []
    }

    isEmpty(){
        return this.stack.length === 0
    }

    push(element){
        this.stack.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return 
        }
        return this.stack.pop()
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.stack[this.stack.length - 1]
    }

    isPrime(number){
        if(number <= 1){
            return false
        }

        for(let i = 2 ; i <= Math.sqrt(number); i++){
            if( number % i === 0){
                return false
            }
        }
        return true
    }

    removePrimes(){
        if(this.isEmpty()){
            return null
        }

        const top = this.pop()
        if(!this.isPrime(top)) {
            this.removePrimes()
            this.push(top)
        } else {
            console.log("Prime number:", top);
            this.removePrimes()
        }
    }


    removeEvenNumer(){
        let oddstack = []

        while(!this.isEmpty()){
            const topElement = this.pop()
            if(topElement  % 2 !== 0){
                oddstack.push(topElement)
            }
        }

        while(oddstack.length){
            this.stack.push(oddstack.pop())
        }

    }

    findMiddleElement(){
        if(this.isEmpty()){
            return null
        }

        const middleIndex = Math.floor(this.stack.length / 2)
        return this.stack[middleIndex]
    }

    reverseString(str){
        for(let char of str){
            this.stack.push(char)
        }

        let reversedStr  = ''
        while(!this.isEmpty()){
            reversedStr += this.stack.pop()
        }

        return reversedStr
    }

    reverse(){
        if(this.isEmpty()){
            return null
        }

        const top = this.pop()
        this.reverse()
        this.insertBottom(top)
    }

    insertBottom(element){
        if(this.isEmpty()){
            this.push(element)
        } else {
            const top = this.pop()
            this.insertBottom(element)
            this.push(top)
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


stack.display()
stack.reverse()
stack.display()
// console.log(stack.findMiddleElement());
// stack.removeEvenNumer()
// stack.display()


// const str = "Hello World"
// console.log(stack.reverseString(str));