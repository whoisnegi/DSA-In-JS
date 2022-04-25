class Solution {
    longestCommonSubstr(S1, S2, n, m) {
        // return lcsR(S1,S2,n,m,0);

        const dp = Array(n + 1).fill().map(_ => Array(m + 1).fill(-1));
        let res = 0;
        for (let i = 0; i <= n; i++) {
            for (let j = 0; j <= m; j++) {
                if (i === 0 || j === 0)
                    dp[i][j] = 0;
                else if (S1[i - 1] === S2[j - 1]) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                    res = dp[i][j] > res ? dp[i][j] : res;
                }
                else
                    dp[i][j] = 0;
            }
        }

        return res;
    }
}

function lcsR(s1, s2, n, m, count) {

    if (n === 0 || m === 0) {
        return count;
    }

    if (s1[n - 1] === s2[m - 1]) {
        count = lcs(s1, s2, n - 1, m - 1, count + 1);
    }

    return Math.max(count, lcs(s1, s2, n - 1, m, 0), lcs(s1, s2, n, m - 1, 0));

}

function lcsTO(s1, s2, n, m) {

    const dp = Array(m + 1).fill(0);

    let res = 0;
    for (let i = 0; i < n; ++i) {
        for (let j = m; j > 0; j--) {
            if (s1[i] === s2[j - 1]) {
                dp[j] = 1 + dp[j - 1];
                res = res > dp[j] ? res : dp[j];
            } else {
                dp[j] = 0;
            }

        }
    }
    return res;
}


const n = 3
const m = 4;
const s1 = 'abc'
const s2 = 'abcd'

lcsTO(s1, s2, n, m);
