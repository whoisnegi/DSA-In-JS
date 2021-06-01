
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;	
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}	

	insert(value) {
		let node = new Node(value)
		let curr = this.root
		if(!curr) {
			this.root = node
			return this
		}
		while(true) {
			if(value === curr.value) return undefined;
			if(value > curr.value) {
				if(curr.right === null) {
					curr.right = node
					return this
				}
				curr = curr.right	
			} else if(value < curr.value) {
				if(curr.left === null) {
					curr.left = node
					return this
				}
				curr = curr.left	
			}
		}
	}

	// find(value) {
	// 	if(this.root === null) return false;
	// 	let curr = this.root;
	// 	while(true) {
	// 		if(value === curr.value) return true;
	// 		if(value > curr.value) {
	// 			if(!curr.right) {
	// 				return false
	// 			} else if(value === curr.right.value){
	// 				return true;
	// 			}
	// 			curr = curr.right;
	// 		} else if (value < curr.value) {
	// 			if(!curr.left) {
	// 				return false
	// 			}else if(value === curr.left.value) {
	// 				return true;
	// 			}
	// 			curr = curr.left
	// 		}

	// 	}
	// }

	find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }	

    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
	}

	BFS() {
		let queue = [];
		let visited = [];
		let curr;
		queue.push(this.root);
		while(queue.length) {
			curr = queue.shift();
			visited.push(curr.value);
			if (curr.left) queue.push(curr.left);
			if (curr.right) queue.push(curr.right);
		}
		return visited
	}

	DFSPreOrder() {
		let visited = [];   
		function traverse(node) {
			visited.push(node.value)
			if(node.left) traverse(node.left)
			if(node.right) traverse(node.right)	
		}
		traverse(this.root)
		return visited
	}

	DFSPostOrder() {
		let visited = [];   
		function traverse(node) {
			node.left && traverse(node.left)
			node.right && traverse(node.right)	
			visited.push(node.value)	
		}
		traverse(this.root)
		return visited
	}

	DFSInOrder() {
		let visited = []
		function traverse(node) {
			node.left && traverse(node.left)
			visited.push(node.value)
			node.right && traverse(node.right)
		}
		traverse(this.root)
		return visited
	}
}	
	
const tree = new BinarySearchTree()

tree.insert(7)
tree.insert(5)
tree.insert(6)
tree.insert(3)
tree.insert(9)
tree.insert(1)
tree.insert(10)

console.dir(tree.DFSInOrder())