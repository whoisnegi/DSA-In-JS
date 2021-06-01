const validAnagram = function(str1,str2) {
    if(str1.length !== str2.length) {
        return false;
    }
    counterObj1 = {}
    counterObj2 = {}
    for(let ch of str1) {
        counterObj1[ch] = (counterObj1[ch] || 0) + 1; 
    }
    for(let ch of str2) {
        counterObj2[ch] = (counterObj2[ch] || 0) + 1; 
    }
    console.log(counterObj1)
    console.log(counterObj2)
    for(let ch in counterObj1) {
        if(!(ch in counterObj2)) {
            return false
        }
        if(counterObj2[ch] !== counterObj1[ch]) {
            return false
        }
    }
    return true;
}

console.log(validAnagram('madamscool','coolismadam'))


