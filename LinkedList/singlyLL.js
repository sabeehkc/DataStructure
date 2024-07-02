class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    // add a value in biggining (prepend)
    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // add a value in end (append)
    append(value) {
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        } else {
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.size++

    }

    // insert a value in specific index 
    insert(value,index) {
        if(index < 0 || index > this.size ) {
            return
        }
        if(index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    // remove node based on index
    removeFrom(index) {
        if(index < 0 || index >= this.size){
            return null
        }
        let removedNode
        if(index === 0){
            removedNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for(let i=0 ;i<index-1;i++){
                prev = prev.next
            }
            removedNode = prev.next
            prev.next = removedNode.next
        }
        this.size--;
        return removedNode.value

    }

    //remover node based on value
    removeValue(value) {
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === value){
         this.head = this.head.next
         this.size--
         return value   
        } else {
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next) {
                const removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null 
        }
    }

    // search node values
    search(value) {
        if(this.isEmpty()){
            return -1
        }
        let i=0
        let curr = this.head
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    //reverse linkedlist
    reverse() {
        let prev = null
        let curr = this.head
        while(curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    removeDuplicates(){
        let curr = this.head
        while(curr && curr.next){
            if(curr.value === curr.next.value){
                curr.next = curr.next.next
            } else {
                curr = curr.next
            }
        }
    }

    // Convert array to linked list
    formArray(arr){
        for(let value of arr ){
            this.append(value)
        }
    }

    //Print values
    print() {
        if(this.isEmpty()) {
            console.log('List is empty');
        } else {
            let curr = this.head
            let listValue = ''
            while(curr) {
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log(listValue);
        }
    }
};

const list = new LinkedList()
console.log("List is empty?", list.isEmpty());
console.log("List size ", list.getSize());
list.print()

list.insert(10,0)
list.print()



list.insert(30,1)
list.print()

list.insert(40,2)
list.print()

list.insert(10,0)
list.print()
list.removeDuplicates()
list.print()

const array = [5,10,15,12,15]
list.formArray(array)
list.print()

// // console.log("Searched value index:",list.search(40));

// list.reverse()
// list.print()