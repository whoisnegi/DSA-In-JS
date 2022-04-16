

function knapSack(N, W, val, wt){

	const dp = Array(W+1).fill(0);
	dp[0] = 0;

	for (let i = 0; i < wt.length; i++) {
		const currWeight = wt[i];
		const currVal = val[i];

		for (let weight = 1; weight < dp.length; weight++) {
			if (currWeight <= weight) {
				const profit = dp[weight - currWeight] + currVal
				dp[weight] = Math.max(profit, dp[weight]);
			}
		}
	}
	console.log(dp);
	return dp[W];
	        
}

function unboundedKnapSack(N, W, val, wt) {
    
    // base case
    if (N === 0 || W === 0) return 0;
    
    if (wt[N-1] > W) {
    	return unboundedKnapSack(N - 1, W, val, wt);
    }
    else {
        return Math.max(val[N-1] + unboundedKnapSack(N, W - wt[N-1], val, wt), unboundedKnapSack(N - 1, W, val, wt));
    }
    
}

function unboundedKnapSackT(N, W, val, wt) {
    
    const dp = Array(N+1).fill().map(_ => Array(W+1).fill(-1));
    
    for (let i = 0; i <= N; i++) {
        for (let j = 0; j <= W; j++) {
            if (j === 0 || i === 0) dp[i][j] = 0;
            else if (j < wt[i-1]) dp[i][j] = dp[i-1][j];
            else dp[i][j] = Math.max(dp[i-1][j], val[i-1] + dp[i][j - wt[i-1]]);
        }
    }
    return dp[N][W];
}

function unboundedKnapSackO(N, W, val, wt) {
    
    const dp = Array(W+1).fill(0);

    for (let i = 0; i < N; i++) {
    	for (let j = 0; j<=W; j++) {
    		if (j >= wt[i-1]) 
    			dp[j] = Math.max(dp[j], val[i-1] + dp[j - wt[i-1]]);
    	}
    }
    return dp[W];
}


const N = 2
const W = 4
const val = [1, 3]
const wt = [1, 5]

console.log(unboundedKnapSackO(N, W, val, wt));










