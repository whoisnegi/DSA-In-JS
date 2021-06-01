
function linearSearch(arr, n) {

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === n) {
			return i
		}
	}
	return -1

}



const arr = [5,4,3,7,6,8]

let res = linearSearch(arr, 7)

console.log(res)