'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'longestCommonSubsequence' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function longestCommonSubsequence(a, b) {

    // if (a.length === 0 || b.length === 0) {
    //     return [];
    // }

    // if (a[a.length - 1] === b[b.length - 1]) {
    //     return [...longestCommonSubsequence(a.slice(0, -1), b.slice(0, -1)), a[a.length - 1]]
    // } else {
    //     const arr1 = longestCommonSubsequence(a, b.slice(0, -1));
    //     const arr2 = longestCommonSubsequence(a.slice(0,-1), b)
    //     return arr1.length > arr2.length ? arr1 : arr2;
    // }

    // Approach 2, Using tabulation method
    const dp = Array(a.length + 1).fill().map(_ => Array(b.length + 1).fill(-1));

    let ls = '';
    for (let i = 0; i <= a.length; ++i) {
        for (let j = 0; j <= b.length; ++j) {
            if (i === 0 || j === 0) {
                dp[i][j] = '';
            } else if (a[i - 1] === b[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + '-' + a[i - 1];
                ls = ls.length > dp[i][j] ? ls : dp[i][j];
            } else {
                dp[i][j] = dp[i - 1][j].length > dp[i][j - 1].length ? dp[i - 1][j] : dp[i][j - 1];
            }
        }
    }

    return ls.split('-');
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const m = parseInt(firstMultipleInput[1], 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = longestCommonSubsequence(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
