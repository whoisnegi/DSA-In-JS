
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
    const qb = [...Array(n)].map(_ => 0);
    // console.log(Solution.getNoOfWaysToReachTop(0, n, qb));
    console.log(Solution.getNoOfWaysToReachTopTabulation(n));
}
// Driver Code Ends

class Solution {

    static getNoOfWaysToReachTop(currentStair, top, qb) {

        if (currentStair === top) return 1;
        if (currentStair > top) return 0;
        if (qb[currentStair] > 0) return qb[currentStair];

        const xWays = this.getNoOfWaysToReachTop(currentStair + 1, top, qb);
        const yWays = this.getNoOfWaysToReachTop(currentStair + 2, top, qb);
        const zWays = this.getNoOfWaysToReachTop(currentStair + 3, top, qb);

        const totalWays = xWays + yWays + zWays;
        qb[currentStair] = totalWays;

        return totalWays;
    }

    static getNoOfWaysToReachTopTabulation(n) {

        let dp = [...Array(n + 1)].map(_ => 0);
        dp[0] = 1;

        for (let i = 1; i < dp.length; ++i) {
            dp[i] = dp[i - 1] + (dp[i - 2] || 0) + (dp[i - 3] || 0);
        }

        return dp[n];
    }
}

// console.log(Solution.getNoOfWaysToReachTop(0, 3, [0, 0, 0]));
// console.log(Solution.getNoOfWaysToReachTopTabulation(3));

