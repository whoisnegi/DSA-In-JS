class Node {
    constructor(val) {
        this.next = null;
        this.prev = null;
        this.val = val;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val)
        if(this.head) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        } else {
            this.head = node
            this.tail = node;
        }
        this.length++
        return this
    }

    pop() {
        if(!this.head) return undefined;
        let poppedNode = this.tail
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }

    print() {
        let currNode = this.head;
        // document.write("Head=>")
        console.log("Head=>");
        while (currNode) {
            // document.write(`${currNode.val}=>`);
            console.log(`${currNode.val}=>`);
            currNode = currNode.next;
        }
        // document.write("Null");
        console.log("Null");
    }

    shift() {
        if(!this.head) return undefined;
        let shiftNode = this.head
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = shiftNode.next
            this.head.prev = null
            shiftNode.next = null
        }
        this.length--
        return shiftNode
    }

    unshift(val) {
        if(!this.head) this.push(val);
        let newNode = new Node(val);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode
        this.length++
        return this
    }

    get(index) {
        if(index>=this.length || index<0) return null;
        let i = 0;
        if(this.length-index < index) {
            var current = this.tail
            while (i<this.length-index) {
                current = current.prev;
                i++
            }
        } else {
            var current = this.head
            while (i<index) {
                current = current.next;
                i++
            }
        }
        return current
    }

    set(index, value) {
        let current = this.get(index)
        if(current) {
            curret.val = value
            return true
        }
        return false
    }

    insert(index, value) {
        if(index<0 && index>this.length) return false;
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);

        let newNode = new Node(value)
        let current = this.get(index)
        let next = current.next;
        current.next = newNode
        newNode.prev = current
        newNode.next = next
        next.prev = newNode
    }

    remove(index) {
        if(index<0 || index>=this.length) return undefined;
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()

        let current = this.get(index)
        if(current) {
            current.prev.next = current.next
            current.next.prev = current.prev
            current.next = null;
            current.prev = null;
            return current
        }
        return false
    }

}

let list = new DoublyLinkedList()

list.push(5)
list.push(6)
list.push(7)
list.push(8)
list.remove(3)
list.print()
