/*
- Recursive
- Divide and conquer
- Stable
- Not in place
*/


function merge(arr1, arr2) {
  	let resArr = [];
  	let i = j = 0;
  	while( i !== arr1.length && j !== arr2.length ) {
  		if (arr1[i] < arr2[j]) {
  			resArr.push(arr1[i]);
  			i++;
  		} else {
  			resArr.push(arr2[j]);
  			j++;
  		}
  	}
  	while (i !== arr1.length) {
  		resArr.push(arr1[i]);
  		i++;
  	}
  	while (j !== arr2.length) {
  		resArr.push(arr2[j]);
  		j++;
  	}
  	return resArr;
}


const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([5,3,2,1,9,0,2,7,1,9]));



