
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
    let numStr = readLine();
    Solution.printKpc(numStr, '');
}
// Driver Code Ends

const keyMaps = ['.;', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tu', 'vwx', 'yz'];

class Solution {

    static printKpc(numStr, ans) {

        // Base case
        if (numStr.length === 0) {
            console.log(ans);
            return;
        }

        if (numStr.length) {
            let keys = keyMaps[numStr[0]];
            for (let i = 0; i < keys.length; ++i) {
                this.printKpc(numStr.slice(1), ans + keys[i]);
            }
        }

        return;
    }
}


console.log(Solution.printKpc('78', ''));


