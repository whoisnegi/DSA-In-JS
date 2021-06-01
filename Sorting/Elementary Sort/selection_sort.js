/*
In selection sort we select the position and then find out the element for that position.
*/

function selection_sort (arr) {

	for(let i=0; i< arr.length-1; i++) {
		let hold = i;
		for(let j=i; j< arr.length; j++) {
			if (arr[j] < arr[hold])
			hold = j;
		}
		if (hold !== i) {
			[arr[hold], arr[i]] = [arr[i], arr[hold]];
		}
	}
	console.log(arr)

}

selection_sort([5,3,4,8,9,6,1,0])
