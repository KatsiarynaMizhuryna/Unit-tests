function chunk(arr, num) {
    let firstArr = [];
    let secondArr = [];
    if (arr.length === 0) {
        return arr;
    }
    if (num === 1) {
        for (let i = 0; i < arr.length; i++) {
            firstArr[i] = [arr[i]];
        }
        return firstArr;
    }
    for (let i = 0; i < num; i++) {
        firstArr[i] = arr[i];
    }
    for (let i = num; i < arr.length; i++) {
        secondArr[i - num] = arr[i];
    }
    return [firstArr, secondArr];
}
module.exports = chunk;
