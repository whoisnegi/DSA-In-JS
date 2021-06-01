
// function binarySearch(arr, value) {

// 	let start = 0;
// 	let end = arr.length-1;

// 	while (start <= end) {

// 		let mid = Math.floor((start + end) / 2) ;

// 		if (arr[mid] === value) {
// 			return mid;
// 		} else if (value < arr[mid]) {
// 			end = mid - 1;
// 		} else {
// 			start = mid + 1;
// 		}
// 	}
// 	return -1
// }


function binarySearch(arr, value) {

		let start = 0;
		let end = arr.length-1;

		while (start <= end) {

			let mid = Math.floor((start + end) / 2) ;

			if (arr[mid] === value) return mid;
			else if (value < arr[mid]) 	end = mid - 1;
		    else start = mid + 1;
		}
		return -1
}





const arr = [2,5,6,9,13,15,28,30]

let res = binarySearch(arr, 28)

console.log(res)
