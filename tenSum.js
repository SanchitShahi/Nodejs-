function getSubset(array, sum) {

    function bcktrc(i = 0, s = 0, t = []) {
        if (s === sum) {
            result.push(t);
            return;
        }
        if (i === array.length) {
            return;
        }
        if (s + array[i] <= sum) { 
            bcktrc(i + 1, s + array[i], t.concat(array[i]));
        }
        bcktrc(i + 1, s, t);
    }

    let result = [];
    bcktrc();
    return result;
}

console.log(getSubset([1,2,3,4,5,6,7,8,9,10,11,12,], 10));