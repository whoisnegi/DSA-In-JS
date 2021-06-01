function insertion_sort (arr) {

	for (let i = 1; i < arr.length; i++) {  
		let key = arr[i];  
		for (let j = i-1; j >= 0 && arr[j] > key; j--) {
				arr[j+1] = arr[j];
		}
		arr[j+1] = key
	}

}

insertion_sort([5,2,7,1,4,6,0,9])




