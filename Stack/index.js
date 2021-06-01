class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode; 
            this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }

    pop() {
        if (this.size === 0) return null;
        if(this.size === 1) this.last = null;
        let returnVal = this.first.val;
        this.first = this.first.next;
        this.size--;
        return returnVal;
    }
}

let stack = new Stack()
stack.push(5)
stack.push(6)
stack.push(7)

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

stack.push(8)
stack.push(9)
stack.push(10)
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
