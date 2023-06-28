function pick(object, arr) {
    let newObj = {};
    for (let i = 0; i < arr.length; i++) {
        newObj[arr[i]] = object[arr[i]];
    }
    return newObj;
}

module.exports = pick;
