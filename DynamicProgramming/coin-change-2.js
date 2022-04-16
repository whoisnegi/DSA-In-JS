function minCoinsT(coins, v, m) {
    
    const dp = Array(m+1).fill().map(_ => Array(v+1).fill(undefined));
    
    for (let i = 0; i<= m; i++) {
        for(let j = 0; j<=v; j++) {
            
            if(j === 0) 
                dp[i][j] = 0;
            else if (i === 0)
                dp[i][j] = null;
            else if (coins[i-1] <= j) {
                if (dp[i-1][j] === null) {
                    if (dp[i][j - coins[i-1]] || dp[i][j - coins[i-1]] === 0) {
                        dp[i][j] = 1 + dp[i][j - coins[i-1]];
                    } else {
                        dp[i][j] = null;
                    }
                } else {
                    if (dp[i][j - coins[i-1]] === null) {
                        dp[i][j] = dp[i-1][j];
                    } else {
                        dp[i][j] = Math.min((dp[i][j - coins[i-1]] || dp[i][j - coins[i-1]] === 0) ? 1 + dp[i][j - coins[i-1]] : 0, dp[i-1][j]);
                    }
                }
            } else
                dp[i][j] = dp[i-1][j];
        }
    }
    return dp[m][v];
}

function minCoinsO(coins, v, m) {
    
    const dp = Array(m+1).fill().map(_ => Array(v+1).fill(null));
    
    for (let i = 0; i<= m; i++) {
        for(let j = 0; j<=v; j++) {
            
            if(j === 0) 
                dp[i][j] = 0;
            else if (i === 0)
                dp[i][j] = Number.MAX_SAFE_INTEGER;
            else if (coins[i-1] <= j && dp[i][j - coins[i-1]] !== Number.MAX_SAFE_INTEGER) {
                dp[i][j] = Math.min(1 + dp[i][j - coins[i-1]], dp[i-1][j]);
            } else
                dp[i][j] = dp[i-1][j];
        }
    }
    console.table(dp);
    return dp[m][v];
}


function minCoinsR(coins, v, m) {
    
    // const dp = Array(m+1).fill().map(_ => Array(v+1).fill(null));

    function minCoinsRHelper(coins, v, m) {

        if (m === 0 && v === 0) {
            return 0;
        } else if (m === 0){
            return Number.MAX_SAFE_INTEGER;
        }

        if (coins[m-1] <= v) {
            return Math.min(minCoinsRHelper(coins, v, m-1), 1 + minCoinsRHelper(coins, v - coins[m-1], m));
        } else {
            return minCoinsRHelper(coins, v, m-1);
        }


    }
    
    return minCoinsRHelper(coins, v, m);
}


const v = 11
const m = 4
const coins  = [9, 6, 5, 1];

console.log(minCoinsO(coins, v, m));


