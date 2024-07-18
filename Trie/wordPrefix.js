class Node {
    constructor(){
        this.keys = new Map()
        this.end = false
    }

    setEnd(){
        this.end = true
    }

    isEnd(){
        return this.end
    }
}

class Trie {
    constructor(){
        this.root = new Node()
    }

    add(word, node = this.root){
        if(!word.length){
            node.setEnd();
            return
        }

        let char = word[0]
        if(!node.keys.has(char)) {
            node.keys.set(char, new Node());
        }
        return this.add(word.slice(1), node.keys.get(char));
    }

    isWord(word, node = this.root) {
        if(!word.lenght){
            return node.isEnd()
        }

        let char = word[0]
        if(!node.keys.has(char)){
            return false
        }
        return this.isWord(word.slice(1),node.keys.get(char))
    }


    findNode(prefix,node= this.root){
        for(let char of prefix){
            if(!node.keys.has(char)) {
                return null
            }
            node = node.keys.get(char)
        }
        return node
    }

    printWord(node = this.root, word = '', arr=[]){
        if(node.isEnd()){
            arr.push(word)
        }
        for(let [char,childNode] of node.keys) {
            this.printWord(childNode, word + char, arr)
        }
        return arr
    }

    findWordsWithPrefix(prefix){
        let node = this.findNode(prefix)
        if(!node){
            return []
        }
        return this.printWord(node,prefix);
    }
}

let myTrie = new Trie();

myTrie.add("apple");
myTrie.add("app");
myTrie.add("apricot");
myTrie.add("banana");
myTrie.add("band");
myTrie.add("bandana");

console.log(myTrie.findWordsWithPrefix("app")); 
console.log(myTrie.findWordsWithPrefix("ban")); 
console.log(myTrie.findWordsWithPrefix("ba"));  
console.log(myTrie.findWordsWithPrefix("cat")); 