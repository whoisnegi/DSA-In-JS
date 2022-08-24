class Solution {
    static LongestRepeatingSubsequence(str) {
        const strLen = str.length;

        // Solution 1
        const dp = Array(strLen + 1).fill().map(_ => Array(strLen + 1).fill(-1));

        for (let i = 0; i <= strLen; ++i) {
            for (let j = 0; j <= strLen; ++j) {
                if (i === 0 || j === 0) {
                    dp[i][j] = 0;
                } else if (str[i - 1] === str[j - 1] && i !== j) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
                }
            }
        }
        console.log(dp);
        return dp[strLen][strLen];

        // Solution 2
        // function lrs(str, i, j) {

        //     if (dp[i][j] !== -1) {
        //         return dp[i][j];
        //     }

        //     if (i === 0 || j === 0) {
        //         return dp[i][j] = 0;
        //     }

        //     if (str[i-1] === str[j-1] && i !== j) {
        //         return dp[i][j] = 1 + lrs(str, i-1, j-1);
        //     } else {
        //         return dp[i][j] = Math.max(lrs(str, i, j-1), lrs(str, i-1, j));
        //     }
        // }
    }
}


Solution.LongestRepeatingSubsequence('aabb');
