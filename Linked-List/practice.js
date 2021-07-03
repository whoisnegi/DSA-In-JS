'use strict';
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    isIndexInvalid(index) {
        return !!(typeof index !== 'number' || index < 0 || index >= this.length);
    }
    // for adding element at the end of the list
    push(value) {
        if (value === undefined) { return this };
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    // removing element from end of the list
    pop() {
        if (!this.length) { return };
        let prevNode = null, currNode = this.head;
        if (!currNode.next) {
            this.head = null;
            this.tail = null;
        } else {
            while (currNode.next) {
                prevNode = currNode;
                currNode = currNode.next;
            }
            prevNode.next = null;
            this.tail = prevNode;
        }
        this.length--;
        return currNode.value;
    }

    // removing element from start of the list
    shift() {
        if (!this.length) { return };
        let currNode = this.head;
        this.head = this.head.next;
        this.length--;
        if (!this.length) {
            this.tail = null;
        }
        return currNode;
    }

    // adding element at the start of the list
    unshift(value) {
        let newNode = new Node(value);
        let currNode = this.head;
        this.head = newNode;
        this.head.next = currNode;
        if (!this.length) {
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (this.isIndexInvalid(index)) return null;
        let currNode = this.head;
        for (let i = 0; i < index; ++i) {
            currNode = currNode.next;
        }
        return currNode;
    }

    replace(index, value) {
        let currNode = this.get(index);
        if (currNode) {
            currNode.value = value;
        }
        return !!currNode;
    }

    insert(index, value) {
        if (typeof index != 'number' || index < 0 || index >= this.length) return null;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        let currNode, temp, newNode = new Node(value);
        currNode = this.get(index - 1);
        newNode.next = currNode.next;
        currNode.next = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if (this.isIndexInvalid(index)) return null;
        if (index === 0) return this.shift();
        if ((index + 1) === this.length) return this.pop()
        let prevNode = this.get(index - 1);
        let returnNode = JSON.parse(JSON.stringify(prevNode.next));
        prevNode.next.value = null;
        prevNode.next = prevNode.next.next;
        this.length--;
        return returnNode;
    }

    reverse() {
        if (!this.length) return;
        let curr = this.head;
        let prev = null;
        let next;
        while (curr) {
            next = curr.next; // save next
            curr.next = prev; // reverse

            // Advance prev and current
            prev = curr;
            curr = next;
        }
        this.tail = this.head;
        this.head = prev;
        return;
    }

    middleNode() {
        let obj = {};
        let curr = this.head;
        let i = 0;
        while (curr) {
            obj[i] = curr;
            curr = curr.next;
            ++i;
        }
        console.log(obj)
        console.log(i);
        if (i % 2 === 0) {
            return obj[i / 2];
        }
        return obj[(i / 2) - 1];
    }
}
const list = new SinglyLinkedList();
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);

// list.reverse();

console.log(JSON.stringify(list.middleNode()));
