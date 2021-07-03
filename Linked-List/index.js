class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    pop() {
        let current = this.head;
        if (!current) return undefined;

        let prev = current;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    print() {
        let currNode = this.head;
        document.write("Head=>")
        // console.log("Head=>");
        while (currNode) {
            document.write(`${currNode.val}=>`);
            // console.log(`${currNode.val}=>`);
            currNode = currNode.next;
        }
        document.write("Null");
        console.log("Null");
    }

    get(index) {
        if (index >= list.length || index < 0) return null;
        let current = this.head;
        let counter = 0;
        while (counter < index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value) {
        let node = this.get(index);
        if (node) {
            node.val = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return this.push(value);
        const node = new Node(value);
        let current = this.get(index - 1);
        node.next = current.next;
        current.next = node;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length) return this.pop();
        let current = this.head;
        let counter = 0;
        while (counter < index - 1) {
            current = current.next;
            counter++;
        }
        current.next = current.next.next;
    }

    reverse() {
        let current = this.head;
        let prev = null;
        let next;
        while (current) {
            next = current.next; // save next
            current.next = prev; // reverse

            // Advance prev and current
            prev = current;
            current = next;
        }
        this.head = prev;
        return this;
    }
}

const list = new SinglyLinkedList();
list.push(5);
list.push(6);
list.push(7);
list.push(8);

list.reverse()

list.print();
