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
    let m = parseInt(readLine());
    console.log(Solution.getMazePath(1, 1, n, m));
}
// Driver Code Ends

class Solution {

    static getMazePath(sr, sc, dr, dc) {

        // Base case
        if (sr === dr && sc === dc) return [''];

        // Take horizontal steps
        let hSteps = [];
        for (let i = sc; i < dc; ++i) {
            let res = this.getMazePath(sr, i + 1, dr, dc);
            res = res.map(r => `h${i + 1 - sc}${r}`);
            hSteps = [...hSteps, ...res];
        }

        // Take vertical steps
        let vSteps = [];
        for (let i = sr; i < dr; ++i) {
            let res = this.getMazePath(i + 1, sc, dr, dc);
            res = res.map(r => `v${i + 1 - sr}${r}`);
            vSteps = [...vSteps, ...res];
        }

        // Take diagonal steps
        let dSteps = [];
        for (let p = sr, q = sc; p < dr && q < dc; ++p, ++q) {
            let res = this.getMazePath(p + 1, q + 1, dr, dc);
            res = res.map(r => `d${p + 1 - sr}${r}`);
            dSteps = [...dSteps, ...res];
        }

        return [...hSteps, ...vSteps, ...dSteps];

    }
}


console.log(Solution.getMazePath(1, 1, 3, 3));
