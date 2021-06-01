function string_search (long, pattern) {
	let count = 0;
	for ( let i = 0; i < long.length; i++ ) {
		if ( long[i] === pattern[0] ) {
			let x = 1;
			for ( var j = i+1; x < pattern.length; j++ ) {
				if ( long[j] === pattern[x] ) x++;
				else break;
				if ( x === pattern.length - 1 ) count ++; 
			}
		}
	}
	return count;
}


// function string_search (long, pattern) {
// 	let count = 0;
// 	for (let i = 0; i< long.length; i++) {
// 		for (let j = 0; j< pattern.length; j++) {
// 			if (long[i+j] !== pattern[j]) break;
// 			if (j === pattern.length - 1) count ++;
// 		}
// 	}
// 	return count;
// }


let res = string_search('womjnmnbhw', 'wo')

console.log(res)
