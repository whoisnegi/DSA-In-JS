
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
    let m = parseInt(readLine());
    let n = parseInt(readLine());
    Solution.printMazePaths(1, 1, m, n, '');
}
// Driver Code Ends

class Solution {

    static printMazePaths(sr, sc, dr, dc, path) {

        if (sr === dr && sc === dc) {
            console.log(path);
        }

        if (sc <= dc) {
            this.printMazePaths(sr, sc + 1, dr, dc, path + 'h'); // move horizontal
        }

        if (sr <= dr) {
            this.printMazePaths(sr + 1, sc, dr, dc, path + 'v'); // move vertical
        }

        return;
    }
}


// Solution.printMazePaths(1, 1, 2, 2, '');




