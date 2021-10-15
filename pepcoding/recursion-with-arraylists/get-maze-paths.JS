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

        // Take horizontal step
        let hRes = sc < dc ? this.getMazePath(sr, sc + 1, dr, dc) : [];

        // Take vertical step
        let vRes = sr < dr ? this.getMazePath(sr + 1, sc, dr, dc) : [];

        hRes = hRes.map(r => 'h' + r);
        vRes = vRes.map(r => 'v' + r);

        return [...hRes, ...vRes];
    }
}



console.log(Solution.getMazePath(1, 1, 3, 3));


















