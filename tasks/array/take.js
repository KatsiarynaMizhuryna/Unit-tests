function take(arr, num) {
    let newArr = [];
    let ind = 0;
    if (num > arr.length) {
        return arr;
    }
    if (num === undefined) {
        num = 1;
    }
    for(let i = 0; i < num; i++) {
        newArr[ind] = arr[i];
        ind++;
    }
    return newArr;
}

module.exports = take;
