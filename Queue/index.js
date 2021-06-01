class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0
    }

    enqueue(val) { 
        let newNode = new Node(val) 
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }

    dequeue() {
        if(!this.first) return null;
        if(this.size === 1) this.last = null;
        let returnVal = this.first.val
        this.first = this.first.next 
        --this.size
        return returnVal
    }
}      

const queue = new Queue()

queue.enqueue(5)
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(8)


console.dir(queue.dequeue())
console.dir(queue.dequeue())
console.dir(queue.dequeue())
console.dir(queue.dequeue())
console.dir(queue)