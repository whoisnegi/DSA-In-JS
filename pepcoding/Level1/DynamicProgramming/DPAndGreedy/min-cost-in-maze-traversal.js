
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
    // inputString = inputString.replace(/ /g, '');
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();
})

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const m = parseInt(readLine());
    const n = parseInt(readLine());

    const maze = [];

    for (let i = 0; i < m; i++) {
        let strArr = readLine().trim().split(' ');
        let rowArr = [];
        for (let j = 0; j < strArr.length; ++j) {
            rowArr.push(parseInt(strArr[j]));
        }
        maze.push(rowArr);
    }

    const minCostMaze = [...Array(m)].map(_ => [...Array(n)].map(_ => 0));
    console.log((Solution.main(m, n, maze, minCostMaze)));
}
// Driver Code Ends

class Solution {

    static main(m, n, maze, minCostMaze) {
        for (let i = m - 1; i > -1; i--) {
            for (let j = n - 1; j > -1; j--) {
                if (i === m - 1 && j === n - 1) {
                    minCostMaze[i][j] = maze[i][j];
                } else if (i === m - 1) {
                    minCostMaze[i][j] = minCostMaze[i][j + 1] + maze[i][j];
                } else if (j === n - 1) {
                    minCostMaze[i][j] = minCostMaze[i + 1][j] + maze[i][j];
                } else {
                    minCostMaze[i][j] = Math.min(minCostMaze[i + 1][j], minCostMaze[i][j + 1]) + maze[i][j];
                }
            }
        }
        return minCostMaze[0][0];
    }
}

// const maze = [[0, 1, 4, 2, 8, 2],
// [4, 3, 6, 5, 0, 4],
// [1, 2, 4, 1, 4, 6],
// [2, 0, 7, 3, 2, 2],
// [3, 1, 5, 9, 2, 4],
// [2, 7, 0, 8, 5, 1]]

// const minCostMaze = [[0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0],
// [0, 0, 0, 0, 0, 0]]

// console.log((Solution.main(6, 6, maze, minCostMaze)));




// [68, 49, 7, 24, 10, 13, 3, 56, 52, 39, 34, 86, 70, 61, 28, 48, 13, 73, 61, 14, 86, 43, 41, 22, 65, 58, 27, 3]

// [26, 41, 70, 1, 31, 98, 44, 60, 24, 76, 100, 61, 10, 20, 32, 15, 30, 14, 91, 5, 67, 43, 34, 28, 9, 81, 6, 9]
