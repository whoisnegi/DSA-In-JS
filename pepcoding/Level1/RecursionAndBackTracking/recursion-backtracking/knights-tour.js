
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
    let row = parseInt(readLine());
    let col = parseInt(readLine());
    const chess = [...Array(n)].map(_ => [...Array(n)].map(_ => 0));
    Solution.printKnightsTour(chess, row, col, 1);
}
// Driver Code Ends

class Solution {

    static printKnightsTour(chess, row, col, move) {

        if (row < 0 || row >= chess.length || col < 0 || col >= chess.length || chess[row][col] > 0) {
            return;
        } else if (move === chess.length * chess.length) {
            chess[row][col] = move;
            this.displayChessBoard(chess);
            chess[row][col] = 0;
            return;
        }

        chess[row][col] = move;
        this.printKnightsTour(chess, row - 2, col + 1, move + 1);
        this.printKnightsTour(chess, row - 1, col + 2, move + 1);
        this.printKnightsTour(chess, row + 1, col + 2, move + 1);
        this.printKnightsTour(chess, row + 2, col + 1, move + 1);
        this.printKnightsTour(chess, row + 2, col - 1, move + 1);
        this.printKnightsTour(chess, row + 1, col - 2, move + 1);
        this.printKnightsTour(chess, row - 1, col - 2, move + 1);
        this.printKnightsTour(chess, row - 2, col - 1, move + 1);
        chess[row][col] = 0;
    }

    static displayChessBoard(chess) {
        chess.forEach(row => {
            row.forEach((move, i) => {
                process.stdout.write(String(move) + (i === row.length - 1 ? '\n' : ' '));
            })
        });
        console.log();
    }


}



// Solution.printKnightsTour([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], 2, 0, 1);

