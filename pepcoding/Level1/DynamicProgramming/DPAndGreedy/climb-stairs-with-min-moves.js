
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
    const n = parseInt(readLine());
    const maxJumps = [];
    for (let i = 0; i < n; i++) {
        maxJumps.push(parseInt(readLine()));
    }
    console.log(Solution.getMinNoOfWaysToReachTop(n, maxJumps));
}
// Driver Code Ends

class Solution {

    static getMinNoOfWaysToReachTop(n, maxJumps) {

        const dp = [...Array(n + 1)].map(_ => 0);
        dp[n] = 1;

        for (let i = n - 1; i > -1; i--) {
            let minJumpToTake = 0;
            for (let j = 1; j <= maxJumps[i]; j++) {
                if ((dp[i + j] !== 0 && minJumpToTake === 0) || (dp[i + j] !== 0 && dp[i + j] < minJumpToTake)) {
                    minJumpToTake = dp[i + j];
                }
            }

            dp[i] = minJumpToTake ? (((maxJumps[i] + i) >= n) ? 1 : minJumpToTake + 1) : 0;
        }

        return dp[0];
    }
}

// console.log(Solution.getMinNoOfWaysToReachTop(10, [1, 1, 1, 4, 9, 8, 1, 1, 10, 1]));


// 10


