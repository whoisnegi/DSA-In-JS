let log = console.log

// function countDown(num) {
//     if(num == 0)
//         return 
//     console.log(num)
//     countDown(num-1)   
// }

// countDown(5)



// function countSum(num) {
//     if(num<=1) return 1;
//     x = num+countSum(num-1)
//     return x
// }

// console.log(countSum(5))


////////////////// FACTORIAL //////////////////////////

// function fact(num) {
//     if(num === 1) return 1;
//     return num*fact(num-1);
// }


// log(fact(5))


////////////////// COLLECT ODDS ////////////////////////


// function collectOdds(arr) {
//     let oddArr = [];
//     function pushOdds(arr) {
//         if(arr.length === 0) return;
//         if(arr[0]%2 !== 0) {
//             oddArr.push(arr[0])
//         }
//         pushOdds(arr.splice(1))
//     }
//     pushOdds(arr);
//     return oddArr
// }

// log(collectOdds([1,2,3,4,5,6,7,8,9,7,65,4,32]))


// without helper method
// function collectOddValues(arr){
//     let newArr = [];
    
//     if(arr.length === 0) {                               
//         return newArr;
//     }
        
//     if(arr[0] % 2 !== 0){
//         newArr.push(arr[0]);
//     }
        
//     // newArr = newArr.concat(collectOddValues(arr.slice(1)));
//     return newArr.concat(collectOddValues(arr.slice(1)));
// }



// function collectOddValues(arr) {
//     let narr = [];
//     if (arr.length === 0) return narr;
//     (arr[0]%2 !== 0) && narr.push(arr[0]);
//     return narr.concat(collectOddValues(arr.splice(1)));
// }


// log(collectOddValues([1,2,3,4,5]))










