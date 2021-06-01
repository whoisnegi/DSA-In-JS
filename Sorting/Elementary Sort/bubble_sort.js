function bubble_sort(arr) {
	for (let i=0; i< arr.length; i++) {
		let swap = false;
		for (let j=0; j< arr.length-i-1; j++) {
			if (arr[j] > arr[j+1]) {
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
				swap = true;
			}
		}
		if(!swap) break;
	}
	console.log(arr)	
}

let res = bubble_sort([8,2,3,4,7])

// console.loG(res)




