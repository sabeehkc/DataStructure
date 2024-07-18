class Node {
    constructor() {
        this.keys = new Map();
        this.end = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    add(word, node = this.root) {
        if (!word.length) {
            node.end = true;
            return;
        }

        let c = word[0];
        if (!node.keys.has(c)) {
            node.keys.set(c, new Node());
        }
        return this.add(word.slice(1), node.keys.get(c));
    }

    isWord(word, node = this.root) {
        if (!word.length) {
            return node.end;
        }
        let c = word[0];
        if (!node.keys.has(c)) {
            return false;
        }
        return this.isWord(word.slice(1), node.keys.get(c));
    }

    printWords(node = this.root, word = '', arr = []) {
        if (node.end) {
            arr.push(word);
        }
        for (let [char, childNode] of node.keys) {
            this.printWords(childNode, word + char, arr);
        }
        return arr;
    }

    delete(word, node = this.root, index = 0) {
        if (index === word.length) {
            if (!node.end) {
                return false;
            }
            node.end = false;
            return node.keys.size === 0;
        }

        let char = word[index];
        if (!node.keys.has(char)) {
            return false;
        }

        let shouldDeleteNode = this.delete(word, node.keys.get(char), index + 1);

        if (shouldDeleteNode) {
            node.keys.delete(char);
            return node.keys.size === 0 && !node.end;
        }

        return true;
    }

    prefixWords(pref) {
        let node = this.findNode(pref);
        if (!node) return [];
        let array = [];
        this.printWords(node, pref, array);
        return array;
    }

    findNode(pref) {
        let node = this.root;
        for (let i = 0; i < pref.length; i++) {
            if (!node.keys.has(pref[i])) {
                return null;
            }
            node = node.keys.get(pref[i]);
        }
        return node;
    }
}

// Testing the Trie with various names
let myTrie = new Trie();


myTrie.add("Saab");
myTrie.add("Sabeeh");
myTrie.add("Ayan");
myTrie.add("A");
myTrie.add("Sneha");
myTrie.add("Aryan");
myTrie.add("Anya");

console.log(myTrie.isWord("Saab")); // true
console.log(myTrie.isWord("Sabeeh")); // true
console.log(myTrie.isWord("Naveen")); // true

console.log(myTrie.printWords()); // [ 'Saab',  'Sabeeh','Sneha', 'A','Ayan',  'Aryan','Anya']

console.log(myTrie.delete("Aryan")); // true
console.log(myTrie.printWords()); // [ 'Saab',  'Sabeeh','Sneha', 'A','Ayan','Anya']

console.log(myTrie.prefixWords("S")); // [ 'Saab', 'Sabeeh', 'Sneha' ]
console.log(myTrie.prefixWords("Sa")); //[ 'Saab', 'Sabeeh' ]
console.log(myTrie.prefixWords("A")); //[ 'A', 'Ayan', 'Anya' ]