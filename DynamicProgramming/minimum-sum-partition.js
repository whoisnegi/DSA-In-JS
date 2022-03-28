function minDifference(arr, n) {

    const getSubsetSumDp = (arr, n, sum) => {
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

    const arrSum = arr.reduce((memory, val) => memory + val, 0);
    const subsetSumDp = getSubsetSumDp(arr, n, arrSum);

    // const candidates = Array(arrSum + 1).fill().map((_, i) => i);
    // const potCandidates = candidates.filter(sum => subsetSumDp[n][sum]);
    // return arrSum - 2 * potCandidates[potCandidates.length % 2 !== 0 ? Math.floor(potCandidates.length / 2) : (potCandidates.length / 2) - 1];

    let diff = Number.MAX_VALUE;
    for (let j = Math.floor(arrSum / 2); j >= 0; j--) {
        if (subsetSumDp[n][j]) {
            diff = arrSum - 2 * j;
            break;
        }
    }
    return diff;
}

// const n = 8;
// const arr = [5, 6, 6, 5, 7, 4, 7, 6];

// console.log(minDifference(arr, n));
