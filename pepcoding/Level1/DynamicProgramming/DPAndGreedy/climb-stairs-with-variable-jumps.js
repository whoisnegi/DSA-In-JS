
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
    // const qb = [...Array(n)].map(_ => 0);
    // console.log(Solution.getNoOfWaysToReachTop(0, n, qb, maxJumps));
    console.log(Solution.getNoOfWaysToReachTopTabulation(n, maxJumps));
}
// Driver Code Ends

class Solution {

    static getNoOfWaysToReachTop(currentStair, top, qb, maxJumps) {

        if (currentStair === top) return 1;
        if (currentStair > top) return 0;
        if (qb[currentStair] > 0) return qb[currentStair];
        if (maxJumps[currentStair] === 0) return 0;

        let noOfWays = 0;
        for (let i = 1; i <= maxJumps[currentStair]; ++i) {
            noOfWays += this.getNoOfWaysToReachTop(currentStair + i, top, qb, maxJumps);
        }

        qb[currentStair] = noOfWays;
        return noOfWays;
    }

    static getNoOfWaysToReachTopTabulation(n, maxJumps) {

        const dp = [...Array(n + 1)].map(_ => 0);
        dp[n] = 1;

        for (let i = n - 1; i > -1; i--) {
            for (let j = 1; j <= maxJumps[i]; j++) {
                dp[i] += dp[i + j] || 0;
            }
        }

        return dp[0];
    }
}

// console.log(Solution.getNoOfWaysToReachTop(0, 10, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 3, 0, 2, 1, 2, 4, 2, 0, 0]));
// console.log(Solution.getNoOfWaysToReachTopTabulation(10, [3, 3, 0, 2, 1, 2, 4, 2, 0, 0]));


