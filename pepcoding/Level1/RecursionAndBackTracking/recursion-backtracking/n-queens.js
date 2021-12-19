
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
    const chess = [...Array(n)].map(_ => [...Array(n)].map(_ => 0));
    Solution.printNQueens(chess, 0, '');
}
// Driver Code Ends

class Solution {

    static printNQueens(chess, row, qsf) {

        if (row === chess.length) {
            console.log(qsf + ',.');
            return;
        }


        for (let col = 0; col < chess.length; ++col) {
            if (this.isItValidToPlaceQueenHere(chess, row, col)) {
                chess[row][col] = 1;
                this.printNQueens(chess, row + 1, ((qsf ? qsf + ', ' : '') + row + '-' + col));
                chess[row][col] = 0;
            }
        }

    }

    static isItValidToPlaceQueenHere(chess, row, col) {
        // check vertically upward
        for (let i = row - 1; i >= 0; --i) {
            if (chess[i][col] === 1) {
                return false;
            }
        }

        // check diagonally upward
        for (let i = col - 1, j = col + 1, k = row - 1; (k >= 0 && (j < chess.length || i >= 0)); --i, --k, ++j) {
            if (chess[k][i] === 1) {
                return false;
            }
            if (chess[k][j] === 1) {
                return false;
            }
        }

        return true;
    }

}



// Solution.printNQueens([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], 0, '');

