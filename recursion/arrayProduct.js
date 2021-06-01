
function product(arr,i) {
    if (arr.length === 0) {
        return arr;
    }
    return product(arr[i])*productt(arr[i-1])
}



product([4,5,3,2,6],4)