
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
    const m = parseInt(readLine());
    const n = parseInt(readLine());

    const arr = [];

    for (let i = 0; i < m; i++) {
        let strArr = readLine().trim().split(' ');
        let rowArr = [];
        for (let j = 0; j < strArr.length; ++j) {
            rowArr.push(parseInt(strArr[j]));
        }
        arr.push(rowArr);
    }

    const dp = [...Array(m)].map(_ => [...Array(n)].map(_ => 0));
    console.log((Solution.collectGold(m, n, arr, dp)));
}
// Driver Code Ends

class Solution {

    static collectGold(m, n, arr, dp) {

        let max = -1;

        for (let i = 0; i < m; i++) {
            dp[i][n - 1] = arr[i][n - 1];
        }

        for (let j = n - 2; j > -1; j--) {
            for (let i = m - 1; i > -1; i--) {
                if (i === m - 1) {
                    dp[i][j] = Math.max(dp[i][j + 1], dp[i - 1][j + 1]) + arr[i][j];
                } else if (i === 0) {
                    dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j + 1]) + arr[i][j];
                } else {
                    dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j + 1], dp[i - 1][j + 1]) + arr[i][j];
                }

                if (j === 0) {
                    max = dp[i][0] > max ? dp[i][0] : max;
                }
            }
        }
        return max;
    }
}


// const arr =
//     [[0, 1, 4, 2, 8, 2],
//     [4, 3, 6, 5, 0, 4],
//     [1, 2, 4, 1, 4, 6],
//     [2, 0, 7, 3, 2, 2],
//     [3, 1, 5, 9, 2, 4],
//     [2, 7, 0, 8, 5, 1]];

// const dp = [[0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0]]


// console.log((Solution.collectGold(6, 6, arr, dp)));
