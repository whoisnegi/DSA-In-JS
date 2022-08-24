// https://practice.geeksforgeeks.org/problems/minimum-number-of-deletions4610/1/


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
    return dp[len1][len2];
}


const minDeletions = (str) => {
    return str.length - longestCommonSubsequence(str, str.split('').reverse().join(''));
}


const str = "aba";
console.log(minDeletions(str));
