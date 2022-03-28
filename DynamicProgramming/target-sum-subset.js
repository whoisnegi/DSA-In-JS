
function DP(m, n) {
    if (m && n) {
        // return Array.from({ length: ++m }, () => Array(n + 1).fill(-1));
        return Array(++m).fill().map(() => Array(n + 1).fill(-1));
    }
    return Array(m + 1).fill(-1);
}

function isSubsetSum(arr, n, sum) {

    const dp = DP(n, sum);
    for (let i = 0; i <= n; i++) {
        let currItem = i && arr[i - 1];

        for (let currSum = 0; currSum <= sum; currSum++) {
            if (currSum === 0) {
                dp[i][currSum] = true;
            } else if (i === 0) {
                dp[i][currSum] = false;
            } else if (currItem <= currSum) {
                dp[i][currSum] = dp[i - 1][currSum - currItem] || dp[i - 1][currSum];
            } else {
                dp[i][currSum] = dp[i - 1][currSum];
            }
        }
    }
    return dp[n][sum];
}

const n = 6
const arr = [3, 34, 4, 12, 5, 2];
const sum = 30;

isSubsetSum(arr, n, sum);
