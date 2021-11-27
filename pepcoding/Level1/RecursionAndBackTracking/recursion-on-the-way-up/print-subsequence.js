
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
    let str = readLine();
    Solution.printSS(str, '');
}
// Driver Code Ends

class Solution {

    static printSS(str, res) {

        // Base case
        if (str.length === 0) {
            console.log(res);
            return;
        }

        this.printSS(str.slice(1), res + str[0]);
        this.printSS(str.slice(1), res);

        return;
    }

}

console.log(Solution.printSS('abc', ''));


