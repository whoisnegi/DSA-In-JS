
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
    let qb = [...Array(n + 1)].map(_ => 0);
    console.log(qb.length);
    Solution.getFibonacci(n, qb);
}
// Driver Code Ends

class Solution {

    static getFibonacci(n, qb) {

        if (n === 0 || n === 1) return n;
        if (qb[n] !== 0) return qb[n];

        let fib1 = this.getFibonacci(n - 1, qb);
        let fib2 = this.getFibonacci(n - 2, qb);
        let fib = fib1 + fib2;
        qb[n] = fib;
        return fib;
    }


}



console.log(Solution.getFibonacci(10, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

