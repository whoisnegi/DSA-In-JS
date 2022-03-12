
// Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin
})
process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();
})

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let n = parseInt(readLine());
    let arr = [];
    for (let i = 0; i < n; i++) {
        let no = parseInt(readLine().trim());
        arr.push(no);
    }
    let target = parseInt(readLine().trim());
    console.log(Solution.main(arr, target));
}
// Driver Code Ends

class Solution {

    static main(arr, target) {

        const dp = [...Array(target + 1)].map(_ => 0);
        dp[0] = 1;

        for (let i = 0; i < arr.length; i++) {
            for (let j = 1; j < dp.length; j++) {
                dp[j] = dp[j] + (j - arr[i] < 0 ? 0 : dp[j - arr[i]]);
            }
        }

        return dp[target];
    }

    static mainRecursive(arr, target) {

    }
}


// console.log(Solution.main([2, 3, 5, 6], 7));
// console.table(console);
