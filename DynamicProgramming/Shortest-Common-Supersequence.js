/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var longestCommonSubsequence = function (text1, text2) {

    const len1 = text1.length;
    const len2 = text2.length;
    const dp = Array(len1 + 1).fill().map(_ => Array(len2 + 1).fill(-1));

    for (let i = 0; i <= len1; ++i) {
        for (let j = 0; j <= len2; ++j) {
            if (i === 0 || j === 0) dp[i][j] = 0;
            else if (text1[i - 1] === text2[j - 1]) dp[i][j] = 1 + dp[i - 1][j - 1];
            else dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
        }
    }
    return dp;
}

var shortestCommonSupersequence = function (str1, str2) {

    const dp = longestCommonSubsequence(str1, str2);

    let m = str1.length;
    let n = str2.length;

    let res = '';

    while (m > 0 && n > 0) {

        if (str1[m - 1] === str2[n - 1]) {
            res = str1[m - 1] + res;
            --m;
            --n;
        } else {
            if (dp[m][n - 1] > dp[m - 1][n]) {
                res = str2[n - 1] + res;
                --n;
            } else {
                res = str1[m - 1] + res;
                --m;
            }
        }

    }

    if (m > 0) {
        res = str1.slice(0, m) + res;
    }

    if (n > 0) {
        res = str2.slice(0, n) + res;
    }

    return res;
};


shortestCommonSupersequence('abac', 'cab');






