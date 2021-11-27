
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


        // // move horizontal
        // for (let i = sc + 1; i <= dc; ++i) {
        //     this.printMazePaths(sr, i, dr, dc, path + 'h' + String(i - sc));
        // }

        // // move vertical
        // for (let i = sr + 1; i <= dr; ++i) {
        //     this.printMazePaths(i, sc, dr, dc, path + 'v' + String(i - sr));
        // }

        // // move diagonal
        // for (let r = sr + 1, c = sc + 1; r <= dr && c <= dc; ++r, ++c) {
        //     this.printMazePaths(r, c, dr, dc, path + 'd' + String(r - sr));
        // }

        for (let ms = 1; ms <= dc - sc; ++ms) {
            this.printMazePaths(sr, sc + ms, dr, dc, path + 'h' + ms);
        }

        for (let ms = 1; ms <= dr - sr; ++ms) {
            this.printMazePaths(sr + ms, sc, dr, dc, path + 'v' + ms);
        }

        for (let ms = 1; ms <= dr - sr && ms <= dc - sc; ++ms) {
            this.printMazePaths(sr + ms, sc + ms, dr, dc, path + 'd' + ms);
        }
        return;
    }
}


Solution.printMazePaths(1, 1, 3, 3, '');
