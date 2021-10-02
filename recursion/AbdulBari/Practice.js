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

// treeRecursion(3);

// Sum of first n naturak=l numbers
function sum(n) {
    if (n === 0) return 0;
    return sum(n - 1) + n;
}

// console.log(sum(3));


function fact(n) {
    if (n === 0) return 1;
    return fact(n - 1) * n;
}

// log(fact(1));


function pow(m, n) {
    if (n === 0) return 1;
    return pow(m, n - 1) * m;
}

// log(pow(2, 1));

function powIterative(m, n) {
    if (n === 0) return 1;
    let res = m;
    for (let i = 1; i < n; ++i) {
        res = res * m;
    }
    return res;
}

// log(powIterative(2, 0));

let power = 1, factorial = 1;
function taylorFun(x, n) {
    if (n === 0) return 1;
    let res = taylorFun(x, n - 1);
    power = power * x;
    factorial = factorial * n;
    return res + (power / factorial);
}

// log(taylorFun(1, 10))

// with reduced number of multiplication
let result = 1;
function taylorHornersRule(x, n) {
    if (n === 0) return result;
    result = (result * x / n) + 1;
    return taylorHornersRule(x, n - 1);
}

// log(taylorHornersRule(1, 10))

// with reduced number of multiplication
function taylorHornersRuleIterative(x, n) {
    let result = 1;
    for (; n > 0; --n) {
        result = (result * x / n) + 1;
    }
    return result;
}

// log(taylorHornersRuleIterative(1, 10))


function fib(n) {
    if (n <= 1) return n;
    return fib(n - 2) + fib(n - 1);
}

// const fib = (n) => n <= 1 ? n : fib(n - 2) + fib(n - 1);

// log(fib(7));

function fibUsingLoop(n) {
    let first = 0;
    let second = 1;
    let res;
    if (n <= 1) return n;
    for (let i = 2; i <= n; ++i) {
        res = first + second;
        first = second;
        second = res;
    }
    return res;
}

// log(fibUsingLoop(6));

function fibonnaci(n) {
    // let res = [... new Array(n + 1)].map(_ => null);
    let res = Array.from({ length: 12 }, _ => -1);
    function helperFib(n) {
        if (n <= 1) {
            res[n] = n;
            return n;
        }
        if (!res[n - 2]) {
            res[n - 2] = helperFib(n - 2);
        }
        if (!res[n - 1]) {
            res[n - 1] = helperFib(n - 1);
        }
        return res[n - 2] + res[n - 1];
    }
    return helperFib(n);
}

// log(fibonnaci(5));

function findCombination(n, r) {
    return (r === 0 || n === r) ? 1 : findCombination(n - 1, r - 1) + findCombination(n - 1, r);
}

log(findCombination(5, 2));


function toh(n, a, b, c) {

}
