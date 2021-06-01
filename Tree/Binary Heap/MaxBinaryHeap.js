class MaxBinaryHeap {
	constructor() {
		this.values = [41,39,33,18,27,12];
	}

	insert(elem) {
		this.values.push(elem)
		this.bubbleUp()
	}

	bubbleUp() {
		let idx = this.values.length-1;
		let element = this.values[idx]
		while(idx > 0) {
			let parentIdx = Math.floor((idx-1)/2);
			let parent = this.values[parentIdx]
			if(element <= parent) break;
			this.values[idx] = parent 
			this.values[parentIdx] = element
			idx = parentIdx;
		} 
	}

	
	extractMax() {
		let max = this.values[0]
		let end = this.values.pop()
		if(this.values.length > 0) {
			this.values[0] = end
			this.sinkDown()
		}
		return max
	}

	sinkDown() {
		let idx = 0
		let element = this.values[idx] 
		let length = this.values.length 	
		while(true) {
			let swap = null
			let leftChild, rightChild;
			let leftChildIdx = (2*idx) + 1   
			let rightChildIdx = (2*idx) + 2 
			// Checking Outbounds
			if(leftChildIdx < length) {
				leftChild = this.values[leftChildIdx]
				if(leftChild > element) {
					swap = leftChildIdx
				}
			}
			if(rightChildIdx < length) {
				rightChild = this.values[rightChildIdx]
				if(
					(swap === null && rightChild > element) || 
				    (swap !== null && rightChild > leftChild))
				{
					swap = rightChildIdx
				}
			}
			if(swap === null) break;
			this.values[idx] = this.values[swap]
			this.values[swap] = element 
			idx = swap 
		}
	}

	// sinkDown() {
	// 	let idx = 0
	// 	while(true) {
	// 		let swap = false
	// 		let element = this.values[idx] 
	// 		let leftChildIdx = (2*idx) + 1   
	// 		let rightChildIdx = (2*idx) + 2 
	// 		let leftChild = this.values[leftChildIdx]  
	// 		let rightChild = this.values[rightChildIdx] 
	// 		if(element < leftChild || element < rightChild) {
	// 			swap = leftChild < rightChild ? rightChildIdx : leftChildIdx 
	// 		}
	// 		if(swap === false) break;
	// 		this.values[idx] = this.values[swap]
	// 		this.values[swap] = element 
	// 		idx = swap 
	// 	}
	// }

	
}

const heap = new MaxBinaryHeap()

console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())
console.log(heap.extractMax())






