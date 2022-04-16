function minDifference(arr, n) {

    const getSubsetSumDp = (arr, n, sum) => {
        // This function can be optimised using only 1d array for dp.
        const dp = Array(n + 1).fill().map(() => Array(sum + 1).fill(-1));

        for (let i = 0; i <= n; i++) {
            for (let j = 0; j <= sum; j++) {
                if (j === 0) {
                    dp[i][j] = 1;
                } else if (i === 0) {
                    dp[i][j] = 0;
                } else if (arr[i - 1] <= j) {
                    dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }

        return dp;
    }

    // const arrSum = arr.reduce((memory, val) => memory + val, 0);
    // const subsetSumDp = getSubsetSumDp(arr, n, arrSum);

    // 1st approach
    // // const candidates = Array(arrSum + 1).fill().map((_, i) => i);
    // // const potCandidates = candidates.filter(sum => subsetSumDp[n][sum]);
    // // return arrSum - 2 * potCandidates[potCandidates.length % 2 !== 0 ? Math.floor(potCandidates.length / 2) : (potCandidates.length / 2) - 1];

    // 2nd approach
    // let diff = Number.MAX_VALUE;
    // for (let j = Math.floor(arrSum / 2); j >= 0; j--) {
    //     if (subsetSumDp[n][j]) {
    //         diff = arrSum - 2 * j;
    //         break;
    //     }
    // }
    // return diff;

    // 3rd approach
    let diff = Number.MAX_VALUE;
    const arrSum = arr.reduce((memory, val) => memory + val, 0);
    const subsetSumDp = getSubsetSumDp(arr, n, Math.floor(arrSum / 2));

    for (let j = Math.floor(arrSum / 2); j >= 0; j--) {
        if (subsetSumDp[n][j]) {
            diff = arrSum - 2 * j;
            break;
        }
    }
    return diff;

    // 4th approach
    // Use knapsack
    // Capacity = arrSum / 2
    // Weight and Value array = given array
    // return arrSum - 2 * result of knapsack
}

const n = 4;
const arr = [1, 6, 11, 5];

console.log(minDifference(arr, n));
