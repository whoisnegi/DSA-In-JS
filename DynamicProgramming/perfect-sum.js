function DP(m, n) {
    if (m && n) {
        // return Array.from({ length: ++m }, () => Array(n + 1).fill(-1));
        return Array(++m).fill().map(() => Array(n + 1).fill(-1));
    }
    return Array(m + 1).fill(-1);
}

function perfectSumRecursive(arr, n, sum) {

    if (n === 0) {
        return sum === 0 ? 1 : 0;
    };

    if (arr[n - 1] <= sum) {
        const res1 = perfectSum(arr, n - 1, sum - arr[n - 1]);
        const res2 = perfectSum(arr, n - 1, sum);
        return res1 + res2;
    }
    return perfectSum(arr, n - 1, sum);
}

function perfectSumTabulation(arr, n, sum) {

    let zeroesCount = 0;
    const dp = DP(n, sum);

    for (let i = 0; i <= n; i++) {
        const currValue = arr[i - 1];
        for (let j = 0; j <= sum; j++) {
            if (j === 0) {
                if (currValue === 0) {
                    zeroesCount++;
                    dp[i][j] = Math.pow(2, zeroesCount);
                } else {
                    dp[i][j] = 1;
                }

            } else if (i === 0) {
                dp[i][j] = 0;
            } else if (currValue <= j) {
                dp[i][j] = dp[i - 1][j] + dp[i - 1][j - currValue];
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[n][sum];
}

function perfectSumTabulationOptimised(arr, n, sum) {
    // with O(sum) space complexity
    let zeroesCount = 0;
    const dp = Array(sum + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < n; i++) {
        const currValue = arr[i];
        for (let currSum = sum; currSum > -1; currSum--) {
            if (currSum === 0) {
                if (currValue === 0) {
                    zeroesCount++;
                    dp[currSum] = Math.pow(2, zeroesCount);
                }
                continue;
            }
            dp[currSum] = currValue <= currSum ? dp[currSum] + dp[currSum - currValue] : dp[currSum];
        }
    }

    return dp[sum];
}


// const n = 3;
// const arr = [0, 1, 2];
// const sum = 0


// console.log(perfectSumTabulation(arr, n, sum));


const n = 10;
const arr = [9, 7, 0, 3, 9, 8, 6, 5, 7, 6];
const sum = 31
console.log(perfectSumTabulationOptimised(arr, n, sum));
