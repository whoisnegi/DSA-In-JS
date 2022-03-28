
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

function DP(m, n) {
    if (m && n) {
        return Array(m + 1).fill(Array(n + 1).fill(-1));
    }
    return Array(m + 1).fill(-1);
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

    static main(n, maxJumps) {


    }
}



