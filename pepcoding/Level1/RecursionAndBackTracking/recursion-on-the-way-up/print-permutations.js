
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
    let t = readLine();
    Solution.printPermutation(t);
}
// Driver Code Ends

class Solution {

    static printPermutation(str, value) {
        if (str.length === 1) {
            console.log(value + str);
            return;
        }
        if (str.length) {
            for (let i = 0; i < str.length; ++i) {
                // this.printPermutation(str.replace(str[i], ''), value + str[i]);
                this.printPermutation(str.slice(0, i) + str.slice(i + 1), value + str[i]);
            }
        }
        return;
    }
}

// Solution.printPermutation('abc', '');



