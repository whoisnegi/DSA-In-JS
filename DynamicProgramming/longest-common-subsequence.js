/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// Approach 1 -> Memoiz
var longestCommonSubsequenceM = function (text1, text2) {

    const dp = Array(text1.length + 1).fill().map(_ => Array(text2.length + 1).fill(-1));

    function lcsHelper(text1, text2) {
        const len1 = text1.length;
        const len2 = text2.length;

        if (len1 === 0 || len2 === 0) {
            return 0;
        }

        if (dp[len1][len2] !== -1) {
            return dp[len1][len2];
        }

        if (text1[len1 - 1] === text2[len2 - 1])
            return dp[len1][len2] = 1 + lcsHelper(text1.slice(0, -1), text2.slice(0, -1));
        else
            return dp[len1][len2] = Math.max(
                lcsHelper(text1, text2.slice(0, -1)),
                lcsHelper(text1.slice(0, -1), text2)
            )
    }

    return lcsHelper(text1, text2);

};

// Approach 2 -> Tabulation
var longestCommonSubsequenceT = function (text1, text2) {

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
    return dp[len1][len2];
}

const dp = Array(110).fill().map(_ => Array(110).fill(-1));
function lcs(x, y, m, n) {

    if (m === 0 || n === 0) {
        return 0;
    }

    if (dp[m][n] !== -1) {
        return dp[m][n];
    }

    if (x[m - 1] === y[n - 1]) {
        return dp[m][n] = 1 + lcs(x, y, m - 1, n - 1);
    } else {
        return dp[m][n] = Math.max(lcs(x, y, m - 1, n), lcs(x, y, m, n - 1));
    }
}

const x = 'frpsxufhi';
const y = 'bizekzlhe';

console.log(lcs(x, y, 9, 9));




























