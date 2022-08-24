//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {
        let n = parseInt(readLine());
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        console.log(obj.matrixMultiplication(arr, n));

    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
*/


function mcmMemoized(arr, i, j, dp) {

    if (i >= j) {
        return 0;
    }

    if (dp[i][j] !== -1) {
        return dp[i][j];
    }

    let res = Infinity;

    for (let k = i; k < j; ++k) {
        res = Math.min(res, mcmMemoized(arr, i, k, dp) + mcmMemoized(arr, k + 1, j, dp) + (arr[i - 1] * arr[k] * arr[j]));
    }

    return dp[i][j] = res;
}

class Solution {

    matrixMultiplication(arr, n) {

        // Solution 1 -> Bottom-up
        const dp = Array(n + 1).fill().map(_ => Array(n + 1).fill(0));

        for (let i = 0; i <= n; ++i) {
            for (let j = 0; j <= n; ++j) {
                if (i === j) {
                    dp[i][j] = 0;
                } else {
                    dp[i][j] = Infinity;
                }
            }
        }

        for (let d = 1; d <= n - 1; ++d) {
            for (let i = 1; i <= n - d; ++i) {
                let j = i + d;
                for (let k = i; k < j; ++k) {
                    dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + (arr[i - 1] * arr[k] * arr[j]));
                }
            }
        }
        // console.log(dp);
        return dp[1][n - 1];

        // Solution 2 -> Top-down
        // const dp = Array(110).fill().map(_ => Array(110).fill(-1));
        // return mcmMemoized(arr, 1, n-1, dp);
    }
}




































