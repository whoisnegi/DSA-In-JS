'use strict';
let log = console.log;

function print(num) {
    if (num > 0) {
        log(num);
        print(num - 1);
        log(num);
    }
}

// print(5);


function treeRecursion(n) {
    if (n > 0) {
        log(n);
        treeRecursion(n - 1);
        treeRecursion(n - 1);
    }
}

treeRecursion(3);
