
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
    let res = Solution.stairPaths(0, n);
    // res.forEach(element => {
    //     console.log(element);
    // });
    res = res.map(r => Number(r));
    console.log(res);
}
// Driver Code Ends

class Solution {

    static getStairPaths(level, top) {

        // Base case
        if (level === top) return [''];
        if (level > top) return [];

        // Make steps at each level
        let res1 = this.stairPaths(level + 1, top);
        let res2 = this.stairPaths(level + 2, top);
        let res3 = this.stairPaths(level + 3, top);

        res1 = res1.map(r => '1' + r);
        res2 = res2.map(r => '2' + r);
        res3 = res3.map(r => '3' + r);

        return [...res1, ...res2, ...res3];
    }

    static printStairPaths(level, top, path) {

        // Base case
        if (level === top) {
            console.log(path);
        };

        if (level > top) return;

        // Make steps at each level
        this.printStairPaths(level + 1, top, path + '1');
        this.printStairPaths(level + 2, top, path + '2');
        this.printStairPaths(level + 3, top, path + '3');

        return;
    }
}

Solution.printStairPaths(0, 3, '');
