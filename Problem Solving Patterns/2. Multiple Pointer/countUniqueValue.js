// const countUniqueValue = (arr) => {
//     let i = 0;
//     let j;
//     let count = 0;
//     while(i<arr.length-1) {
//         j=i+1;
//         if(arr[i] === arr[j]) {
//             do{j++}
//             while(arr[i] === arr[j])
//             i = j;
//         } else {
//             count+=1
//             i++;
//         }
//     }
//     return count
// }


const countUniqueValue = (arr) => {
    if(arr.length === 0) return 0;
    let i = 0;
    for(let j=1; j<arr.length; j++) {
        if(arr[j] !== arr[i]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i+1;
}

console.log(countUniqueValue([-1,-1,-2,-3,0,0,1,3,4,4,4,6]))