
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
    Solution.printEncodings(t, '');
}
// Driver Code Ends

class Solution {

    static printEncodings(str, ans) {
        if (str === '') {
            console.log(ans);
        } else {
            if (Number(str[0]) === 0) return;
            this.printEncodings(str.slice(1), ans + String.fromCharCode(96 + Number(str[0])));
            if (str.length >= 2 && Number(str.slice(0, 2)) < 27) {
                this.printEncodings(str.slice(2), ans + String.fromCharCode(96 + Number(str.slice(0, 2))));
            }
        }
    }
}


// Solution.printEncodings('655196', '');


