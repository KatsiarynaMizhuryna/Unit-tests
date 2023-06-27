function compact(arr) {
    let newArr = [];
    let ind = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr[ind] = arr[i];
            ind++;
        }
    }
    return newArr;
}

module.exports = compact;
