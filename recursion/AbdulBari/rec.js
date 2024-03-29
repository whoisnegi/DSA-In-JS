let log = console.log

/**
 * Recursion has 2 phases, Calling phase and Returning phase.
 * Types of recursion
 * 1. Tail Recursion
 * 2. Head Recursion
 * 3. Liner Recursion
 * 4. Tree Recursion
 * 5. Indirect Recursion
 * 6. Nested Recursion 
 */

/**
 * Head recursion -> 
 * Recursive call is the first statement
 * Cannot converted directly into loop
 */

/**
 * Tail recursion -> 
 * Recursive call is the last statement or no statement after recursive call    
 * In case of tail recursion better to use loops
 * Can be easily converted into loop
 */

/**
 * Linear recursion -> 
 * When a function is calling itself one time then it is linear recursion.    
 */

/**
 * Tree recursion -> 
 * When a function is calling itself more than one time then it is Tree recursion.    
 */

function print(num) {
    if (num > 0) {
        log(num)
        print(num - 1)
    }
}
// print(5)

//Tree recusrsion -> when there is more than one recursive call
function fun(n) {
    if (n > 0) {
        log(n);
        fun(n - 1);
        fun(n - 1);
    }
}
// fun(3)

// Nested Recursion -> The parameter that passed to a recursive call is itself a recursive call;
function nestedRecursion(n) {
    if (n > 100) return n - 10;
    return nestedRecursion(nestedRecursion(n + 11));
}

log(nestedRecursion(95));

//Sum of first n natural number 
function sum(n) {
    if (n === 0) return 0;
    return n + sum(n - 1);
}

// log(sum(5))


// Finding factorial of a number
function fact(n) {
    if (n <= 1) {
        return 1
    }
    return n * fact(n - 1)
}
// log(fact(5))

//Power of a number
function pow(n, m) {
    if (m === 0) {
        return 1
    }
    return n * (pow(n, m - 1))
}

function pow(n, m) {
    if (m === 0) {
        return 1
    }
    if (m % 2 === 0) {
        return pow(n * n, m / 2)
    } else {
        return n * pow(n * n, (m - 1) / 2)
    }
}
// log(pow(2,9))
function pow(x, n) {
    if (n === 1) return x;
    let powRes = pow(x, Math.trunc(n / 2));
    let res = powRes * powRes;
    return (n % 2) === 0 ? res : x * res;
}

function powE(m, n) {
    if (n === 0) return 1;
    if (n % 2 === 0) return powE(m * m, n / 2)
    else return m * powE(m * m, (n - 1) / 2)
}

// log(powE(2,4)) 



// Taylor series using recursion
function e(x, n) {
    let p = 1;
    let f = 1;
    function _compute(x, n) {
        let res
        if (n === 0) return 1;
        else {
            res = _compute(x, n - 1)
            p = p * x;
            f = f * n;
            return res + (p / f)
        }
    }
    return _compute(x, n)
}

//Taylor series using iterative approach
function e(x, n) {
    let res = 1
    let p = 1
    let f = 1
    for (let i = 1; i <= n; ++i) {
        p *= x
        f *= i
        res += (p / f)
    }
    return res
}


//Taylor series using Horners rule

// Iterative approach
function ehi(x, n) {
    let s = 1
    for (; n > 0; n--) {
        s = 1 + (x / n) * s
    }
    return s
}
// Recursive approach
function ehr(x, n) {
    let s = 1;
    function _help(x, n) {
        if (n === 0) return s;
        s = 1 + (x / n) * s
        return _help(x, n - 1)
    }
    return _help(x, n)
}


//Fibonnaci series

// 0 1 1 2 3 5 8 13

let m = {}
let res
function fib(n) {
    if (n <= 1) {
        m[n] = n
        return n
    } else {
        if (!m[n - 1]) {
            m[n - 1] = fib(n - 1)
        }
        if (!m[n - 2]) {
            m[n - 2] = fib(n - 2)
        }
    }
    res = m[n - 1] + m[n - 2]
    return res
}


// var foo = new Array(10);
// var foo = [];
// foo[5] = 10
// log(foo[5])
// log(foo[6])



































