
// Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let dr;
let dc;

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin
})
process.stdin.on('end', _ => {
    inputString = inputString.replace(/ /g, '');
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    main();
})

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const arraySize = readLine();
    const maze = [];
    dr = parseInt(arraySize[0]);
    dc = parseInt(arraySize[1]);

    for (let i = 0; i < dr; i++) {
        let str = readLine().trim();
        let subArr = [];
        for (let j = 0; j < dc; ++j) {
            subArr.push(parseInt(str[j]));
        }
        maze.push(subArr);
    }
    const visited = [...Array(dr)].map(_ => [...Array(dc)].map(_ => false));
    dr = dr - 1;
    dc = dc - 1;
    Solution.floodfill(maze, 0, 0, '', visited);
}
// Driver Code Ends

class Solution {

    static floodfill(maze, sr, sc, asf, visited) {
        // Base Case
        if (sr === dr && sc === dc) {
            console.log(asf);
            return;
        }

        let lastMove = asf[asf.length - 1];

        // Column visited
        visited[sr][sc] = true;

        // Move UP/TOP
        if (sr - 1 >= 0 && maze[sr - 1][sc] !== 1 && !visited[sr - 1][sc]) {
            this.floodfill(maze, sr - 1, sc, asf + 't', visited);
        }

        // Move Left
        if (sc - 1 >= 0 && maze[sr][sc - 1] !== 1 && !visited[sr][sc - 1]) {
            this.floodfill(maze, sr, sc - 1, asf + 'l', visited);
        }

        // Move Down
        if (sr + 1 <= dr && maze[sr + 1][sc] !== 1 && !visited[sr + 1][sc]) {
            this.floodfill(maze, sr + 1, sc, asf + 'd', visited);
        }

        // Move Right
        if (sc + 1 <= dc && maze[sr][sc + 1] !== 1 && !visited[sr][sc + 1]) {
            this.floodfill(maze, sr, sc + 1, asf + 'r', visited);
        }

        visited[sr][sc] = false;
    }
}


// Solution.floodfill(0, 0, '');


// 0 0 0
// 1 0 1
// 0 0 0
