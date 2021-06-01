// const maxSubArraymaxSum = (arr,n) => {
//     let maxSum = [];
//     for(let i=0; i<=arr.length-n; i++) {
//         maxSum[i] = arr[i]
//         for(let j=i+1; j<i+n; j++) {
//             maxSum[i] = maxSum[i] + arr[j]
//         }
//     }
//     return Math.max(...maxSum)
// }

const maxSubArraymaxSum = (arr,n) => {
    let maxSum;
    let finalmaxSum = 0;
    for(let i=0; i<=arr.length-n; i++) {
        maxSum = arr[i]
        for(let j=i+1; j<i+n; j++) {
            maxSum = maxSum + arr[j]
        }
        (maxSum>finalmaxSum) ? finalmaxSum = maxSum: {};
    }
    return finalmaxSum
}

//REFACTOR



function maxSubArraymaxSum(arr,n) {
    let maxSum = 0;
    let temp = 0
    if(arr.length === 0) return null;
    for(let i=0; i<n; i++) {
        maxSum = maxSum + arr[i]
    }
    temp = maxSum;
    for(let j=n; j<arr.length; j++) {
        temp = temp + arr[j] - arr[j-n]
        maxSum = Math.max(temp,maxSum)
    }
    return maxSum
}

console.log(maxSubArraymaxSum([3,2,5,2,8,1,5],2))



