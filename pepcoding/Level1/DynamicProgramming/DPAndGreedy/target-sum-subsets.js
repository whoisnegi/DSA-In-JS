
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

        const dp = [...Array(arr.length + 1)].map(_ => [...Array(target + 1)].map(_ => false));

        for (let i = 0; i < dp.length; i++) {
            for (let j = 0; j < dp[i].length; j++) {
                if (j === 0) {
                    dp[i][j] = true;
                } else if (i === 0) {
                    continue;
                } else {
                    if (dp[i - 1][j] || ((j - arr[i - 1] > -1) && dp[i - 1][j - arr[i - 1]])) {
                        dp[i][j] = true;
                    }
                }
            }
        }

        return dp[arr.length][target];
    }

}


// console.log(Solution.main([4, 2, 7, 1, 3], 10));
// console.table(console);
