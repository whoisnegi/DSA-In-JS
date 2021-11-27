function getStairPaths(s = 0, d) {

    if (s === d) return [''];
    if (s > d) return [];

    // Take allowed steps
    let res1 = getStairPaths(s + 1, d);
    let res2 = getStairPaths(s + 2, d);
    let res3 = getStairPaths(s + 3, d);

    let res = [];

    for (let i of res1) {
        res.push('1' + i);
    }
    for (let i of res2) {
        res.push('2' + i);
    }
    for (let i of res3) {
        res.push('3' + i);
    }

    return res;
}

let ans = getStairPaths(0, 3);
console.log(ans);








/**

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
    let d = parseInt(readLine());
    let s = 0;
    let res = Solution.getStairPaths(s, d);
    console.log(res);
}
// Driver Code Ends

class Solution {

    static getStairPaths(s, d) {
        if (s === d) return [''];
        if (s > d) return [];

        // Take allowed steps
        let res1 = this.getStairPaths(s + 1, d);
        let res2 = this.getStairPaths(s + 2, d);
        let res3 = this.getStairPaths(s + 3, d);

        let res = [];

        for (let i of res1) {
            res.push('1' + i);
        }
        for (let i of res2) {
            res.push('2' + i);
        }
        for (let i of res3) {
            res.push('3' + i);
        }

        return res;
    }
}


 */






































































