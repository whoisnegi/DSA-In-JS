/*
In quick sort we select the element and then find out the position for that element
*/

const pivot = (arr, l, h) => {
    let pivot = arr[l];
    let i = l++;
    let j = h
    while (i < j) {
        while (arr[i] <= pivot) {
           i++
        };
        while (arr[j] > pivot) {
            j--
        };
        if (i < j) {
            arr[i], arr[j] = arr[j], arr[i];
        }
    }
    arr[l],arr[j] = arr[j],arr[l]
    return j
}

console.log(pivot([4,2,1,7,0], 0, 4))
