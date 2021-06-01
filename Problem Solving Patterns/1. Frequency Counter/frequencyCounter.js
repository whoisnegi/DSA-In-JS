
// function same(arr1,arr2){
//     if(arr1.length !== arr2.length) {
//         return false;
//     } else {
//         for( let i=0; i<arr1.length; i++ ) {
//             for( let j=0; j<arr2.length; j++ ) {
//                 if( arr2[j] === arr1[i]**2 ) {
//                     arr2.splice(j,1)
//                     break;
//                 } 
//             }
//         }
//     }
//     return (arr2.length == 0) ? true: false; 
// }


// function same(arr1,arr2){
//     if(arr1.length !== arr2.length) {
//         return false;
//     } 
//     for(let i=0; i<arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2)
//         if(correctIndex === -1) {
//             return false;
//         }
//         arr2.splice(correctIndex,1)
//     }
//     return true;
// } 

// function same(arr1,arr2){
//     if(arr1.length !== arr2.length) {
//         return false;
//     }
//     let frequencyCOunter1 = {}; 
//     let frequencyCOunter2 = {};
//     for(let val of arr1){
//         frequencyCOunter1[val] = (frequencyCOunter1[val] || 0) + 1
//     }
//     for(let val of arr2){
//         frequencyCOunter2[val] = (frequencyCOunter2[val] || 0) + 1
//     }
//     for(let key in frequencyCOunter1){
//         if(!(key ** 2 in frequencyCOunter2)){
//             return false;
//         }
//         if(frequencyCOunter2[key ** 2] !== frequencyCOunter1[key]){
//             return false
//         }
//     }
//     return true
// }
    
// function same(arr1, arr2) {
//     if(arr1.length !== arr2.length) {
//         return false;
//     }
//     let counter1 = {};
//     let counter2 = {};
//     for(let val of arr1) {
//         if(counter1[val] > 0) {
//             counter1[val]++;
//         } else {
//             counter1[val] = 1;
//         }
//     }    
//     for(let val of arr2) {
//         if(counter2[val] > 0) {
//             counter2[val]++;
//         } else {
//             counter2[val] = 1;
//         }
//     }
//     console.log(counter1);
//     console.log(counter2);
//     for(let key in counter1) {
//         if( !(key ** 2 in counter2)) {
//             return false;
//         }
//         if(counter1[key] !== counter2[key ** 2]){
//             return false;
//         }
//     }
//     return true;
// }

console.log(same([1,2,4,1,5,5,0],[0,1,4,1,16,10,10]))