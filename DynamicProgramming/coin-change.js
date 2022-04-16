function count(S, m, n) {
        
        const dp = Array(m+1).fill().map(_ => Array(1000+1).fill(-1));
        
        const countHelper = (S, m, n) => {
            if (n === 0) return 1;
            if (n < 0) return 0;
            if (m === 0) {
                return n === 0 ? 1 : 0
            }
            
            if (dp[m][n] !== -1) return dp[m][n];
            
            if (S[m-1] <= n) {
                let way1 = this.count(S, m, n-S[m-1]);
                let way2 = this.count(S, m-1, n);
            
                return dp[m][n] = way1 + way2;        
            } else {
                return this.count(S, m-1, n);
            }
            
        }
        
        return countHelper(S, m, n);
}

function countT(S, m, n) {
    
    const dp = Array(m+1).fill().map(_ => Array(n+1).fill(0));
    
    for(let i = 0; i<= m; i++) {
        for (let j = 0; j<=n; j++) {
            if (j === 0) dp[i][j] = 1;
            else if (i === 0) dp[i][j] = 0;
            else if (S[i-1] <= j) dp[i][j] = dp[i-1][j] + dp[i][j - S[i-1]];
            else dp[i][j] = dp[i-1][j];
        }
    }
    console.log(dp);
    return dp[m][n]
}

function countO(S, m, n) {
    
    const dp = Array(n+1).fill(0);
    dp[0] = 1;
    
    for (let i = 0; i < m; i++) {
        for (let j = 1; j<=n; j++) {
            if (S[i] <= j) {
                dp[j] += dp[j - S[i]] ;
            }
        }
    }
    return dp[n];
}


const n = 4
const m = 3
const S = [1, 2, 3];

countT(S, m, n);













