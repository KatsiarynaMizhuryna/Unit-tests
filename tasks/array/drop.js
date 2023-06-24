function drop(arr, num) {
    let newArr = [];
    let ind = 0;
    if (num === undefined) {
        num = 1;
    }
    for(let i = num; i < arr.length; i++) {
        newArr[ind] = arr[i];
        ind++;
    }
    return newArr;
}

module.exports = drop;
