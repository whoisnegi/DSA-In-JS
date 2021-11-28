
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
    let arr = [];
    for (let i = 0; i < n; i++) {
        let no = parseInt(readLine().trim());
        arr.push(no);
    }
    let target = parseInt(readLine().trim());
    Solution.printTargetSumSubsets(arr, 0, '', 0, target)
}
// Driver Code Ends

class Solution {

    static printTargetSumSubsets(arr, idx, subSet, sos, tar) {
        //Your code starts here

        // Base case
        if (idx === arr.length) {
            if (sos === tar) {
                console.log(subSet + '.');
            }
            return;
        }

        this.printTargetSumSubsets(arr, idx + 1, subSet + arr[idx] + ', ', sos + arr[idx], tar);
        this.printTargetSumSubsets(arr, idx + 1, subSet, sos, tar);

    }

}


// Solution.printTargetSumSubsets([10, 20, 30, 40, 50], 0, '', 0, 60);

