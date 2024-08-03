class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    // add a value in biggining (prepend)
    prepend(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    // add a value in end (append)
    append(value){
        let node = new Node(value)
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
    insert(value,index){
        if(index < 0 || index > this.size){
            return null
        }

        if(index === 0){
            this.prepend(value)
        } else {
            let node = new Node(value)
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
        if(index < 0 || index > this.size){
            return null
        }

        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = removeNode.next
        } else {
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }

     //remover node based on value
    removeValue(value){
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
            if(prev.next){
                let removedNode = prev.next
                prev.next = removedNode.next
                this.size--
                return value
            }
            return null
        }
    }

    // search node values
    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i = 0
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


    // reverse linkedlist
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    // reverse linkedlist using recursion
    reverseRecursive(){
        const reverse = (node) => {
            if(!node || !node.next) {
                this.head = node
                return node
            }

            let newHead = reverse(node.next);
            node.next.next = node;
            node.next = null
            return newHead
        }
        reverse(this.head);
    }

    // Remove duplicates 
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


    // // Remove duplicates  using set
    removeDuplicates(){
        let curr = this.head;
        let seen = new Set(); 
        let prev = null; 
    
        while(curr){
            if(seen.has(curr.value)){
                prev.next = curr.next;
                
            } else {
                
                seen.add(curr.value);
                prev = curr;
            }
            curr = curr.next; 
        }
    }


    // Convert array to linked list
    convertArray(arr){
        for(let num of arr){
            this.append(num)
        }
    }

   
    // check is prime mumner
    isPrime(num) {
        if (num <= 1) return false;  // Numbers less than or equal to 1 are not prime.
        if (num <= 3) return true;   // 2 and 3 are prime numbers.
        if (num % 2 === 0 || num % 3 === 0) return false; // Exclude multiples of 2 and 3.
        for (let i = 5; i * i <= num; i += 6) {  // Check for factors from 5 to sqrt(num).
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;  // If no factors found, num is prime.
    }

    // find prime number in linkedlist
    findPrime(){
        if(this.isEmpty()){
            console.log("List is empty");
        }

        let curr = this.head
        let prime = [];

        while(curr){
           if(this.isPrime(curr.value)){
            prime.push(curr.value)
           }
           curr = curr.next
        }

        if(prime.length > 0){
            console.log('Prime Numbers in the List:',prime.join(" "));
        } else {
            console.log('No prime numbers found in the list');
        }
        
       
    }

    // find middle element in linkedlist
    findMiddle(){
        if(this.isEmpty()){
            return null
        }

        let slow = this.head
        let fast = this.head
        
        while(fast && fast.next){
            slow = slow.next 
            fast = fast.next.next 
        }
        return slow.value
    }

    // linked-list add node to middle of single linked list 
    addMiddle(value){
        let node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.size++
            return value
        }

        let prev = null
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            prev = slow
            slow = slow.next
            fast = fast.next.next
        }

        if(prev){
            prev.next = node
            node.next = slow
        } else {
            node.next = this.head; 
            this.head = node
        }
        this.size++
    }

    removeMiddle(){
        if(this.isEmpty()){
            console.log("List is empty");
            return null
        }

        let prev = null
        let slow = this.head
        let fast = this.head

        while(fast && fast.next){
            prev = slow 
            slow = slow.next 
            fast = fast.next.next 
        }

        if(prev){
            prev.next = slow.next
        } else {
            this.head = slow.next
        }

        this.size--
    }

    // LINKEDLIST-SWAP FIRST AND LAST LETTER
    swapFirstAndLast(){
        if(this.isEmpty()){
            return null
        }

        let first = this.head
        let last = this.head

        while(last.next){
            last = last.next
        }

        let temp = first.value
        first.value = last.value
        last.value = temp

        let swappedValues = ''
        let curr = this.head
        while(curr){
            swappedValues += `${curr.value} `
            curr = curr.next
        }
        console.log("Swapped values",swappedValues);

    }

    // find totel sum
    sum(){
        if(this.isEmpty()){
            console.log("List is empty");
            return null
        }

        let curr = this.head
        let sum = 0
        while(curr){
            sum += curr.value
            curr = curr.next
        }

        return sum
    }

    //find totel sum using recursion
    sumrecursive(node = this.head){
        if(node === null){
            return 0
        }

        return node.value + this.sumrecursive(node.next)
    }


    //Print values
    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        } else {
            let curr = this.head
            let listValue = ''
            while(curr){
                listValue += `${curr.value} `
                curr = curr.next
            }
            console.log('List Values:' , listValue);
        }

    }
}

let list = new LinkedList()
list.print()
list.prepend(5)
list.append(10)
list.insert(7,1)
list.print()
console.log(list.search(5));
list.reverse()

let arr = [15,18,14,20]
list.convertArray(arr)
list.print()

list.addMiddle(20)
list.print()
list.addMiddle(50)
list.print()

list.removeMiddle()
list.print()

list.findPrime();
console.log("Middle Element:",list.findMiddle());


list.swapFirstAndLast()
console.log("Total sum:",list.sum());
console.log("Totwl sum(recursion)",list.sumrecursive());


// linked list-reverse string
// class ListNode {
//     constructor(val = "", next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// const reverseStringLinkedList = function(str) {
//     let head = null;
//     for (let i = str.length - 1; i >= 0; i--) {
//         head = new ListNode(str[i], head);
//     }
//     let reversedString = "";
//     let current = head;
//     while (current !== null) {
//         reversedString = current.val + reversedString;
//         current = current.next;
//     }
//     return reversedString;
// };
// const inputString = "SNEHA VIJAYAN";
// const reversedString = reverseStringLinkedList(inputString);
// console.log("Reversed String:", reversedString);





// LINKEDLIST-SWAP FIRST AND LAST LETTER
// class ListNode {
//     constructor(val = "", next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// const swapFirstAndLast = function(str) {
//     let head = null;
//     for (let i = str.length - 1; i >= 0; i--) {
//         head = new ListNode(str[i], head);
//     }
//     let first = head;
//     let last = head;
//     while (last.next !== null) {
//         last = last.next;
//     }
//     let temp = first.val;
//     first.val = last.val;
//     last.val = temp;
//     let swappedString = "";
//     let current = head;
//     while (current !== null) {
//         swappedString += current.val;
//         current = current.next;
//     }
//     return swappedString;
// };
// const inputString = "apple";
// const swappedString = swapFirstAndLast(inputString);
// console.log("Swapped String:", swappedString); 


// // LINKED LIST-palindrome using linklist
// class ListNode {
//     constructor(val = 0, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// const isPalindrome = function(head) {
//     if (!head || !head.next) {
//         return true; 
//     }
//     let slow = head;
//     let fast = head;
//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     let secondHalf = reverseLinkedList(slow);
//     let firstHalf = head;
//     while (secondHalf) {
//         if (firstHalf.val !== secondHalf.val) {
//             return false; 
//         }
//         firstHalf = firstHalf.next;
//         secondHalf = secondHalf.next;
//     }
//     return true; 
// };
// const reverseLinkedList = function(head) {
//     let prev = null;
//     let current = head;
//     while (current) {
//         let next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }
//     return prev;
// };
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(2);
// head.next.next.next.next = new ListNode(1);
// console.log("Is the linked list a palindrome?", isPalindrome(head));




//  // LINKEDLIST-PALINDROME(STRING)
// class ListNode {
//     constructor(val = "", next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }
// const isPalindrome = function(str) {
//     if (!str || str.length === 0) {
//         return true; 
//     }
//     const createLinkedList = function(str) {
//         let head = null;
//         for (let i = str.length - 1; i >= 0; i--) {
//             head = new ListNode(str[i], head);
//         }
//         return head;
//     };
//     const head = createLinkedList(str);
//     let slow = head;
//     let fast = head;
//     let prev = null;
//     while (fast !== null && fast.next !== null) {
//         fast = fast.next.next;
//         let next = slow.next;
//         slow.next = prev;
//         prev = slow;
//         slow = next;
//     }
//     if (fast !== null) {
//         slow = slow.next;
//     }
//     while (prev !== null && slow !== null) {
//         if (prev.val !== slow.val) {
//             return false; 
//         }
//         prev = prev.next;
//         slow = slow.next;
//     }
//     return true; 
// };
// const inputString = "malayalam";
// console.log(`Is "${inputString}" a palindrome?`, isPalindrome(inputString));



// // LINKEDLIST-MERGE TWO LISTS
// class ListNode {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// const mergeTwoLists = function(l1, l2) {
//     const dummyHead = new ListNode();
//     let current = dummyHead;
//     while (l1 !== null && l2 !== null) {
//         if (l1.val <= l2.val) {
//             current.next = l1;
//             l1 = l1.next;
//         } else {
//             current.next = l2;
//             l2 = l2.next;
//         }
//         current = current.next;
//     }
//     if (l1 !== null) {
//         current.next = l1;
//     }
//     if (l2 !== null) {
//         current.next = l2;
//     }

//     return dummyHead.next;
// };

// const printLinkedList = function(head) {
//     const values = [];
//     let current = head;
//     while (current !== null) {
//         values.push(current.val);
//         current = current.next;
//     }
//     console.log(values.join(' -> '));
// };

// const l1 = new ListNode(1);
// l1.next = new ListNode(3);
// l1.next.next = new ListNode(5);

// const l2 = new ListNode(2);
// l2.next = new ListNode(4);
// l2.next.next = new ListNode(6);

// const mergedList = mergeTwoLists(l1, l2);

// console.log("Merged List:");
// printLinkedList(mergedList);





// // remove odd numbers from list
// class ListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// const removeOddValues = function(head) {
//     while (head !== null && head.value % 2 !== 0) {
//         head = head.next;
//     }
//     if (head === null) return null;
//     let current = head;
//     while (current !== null && current.next !== null) {
//         if (current.next.value % 2 !== 0) {
//             current.next = current.next.next;
//         } else {
//             current = current.next;
//         }
//     }
//     return head;
// }

// const printList = function(head) {
//     let current = head;
//     let values = [];
//     while (current) {
//         values.push(current.value);
//         current = current.next;
//     }
//     console.log(values.join(" -> "));
// }
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);

// console.log("Original list:");
// printList(head);

// head = removeOddValues(head);

// console.log("List after removing odd values:");
// printList(head); 




// // add value next to another value
// class ListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }
// const addNodeAfter = function(node, newValue) {
//     if (node === null) {
//         throw new Error("The given node is null.");
//     }
//     const newNode = new ListNode(newValue);
//     newNode.next = node.next;
//     node.next = newNode;
// }
// const print = function(head) {
//     let curr = head;
//     let values = [];
//     while (curr) {
//         values.push(curr.value);
//         curr = curr.next;
//     }
//     console.log(values.join(" -> "));
// }
// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(5);
// head.next.next.next.next = new ListNode(6);
// print(head); 
// addNodeAfter(head.next, 4);
// print(head); 
