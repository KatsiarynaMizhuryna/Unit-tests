function omit(object, arr) {
    for (let i = 0; i < arr.length; i++) {
        delete object[arr[i]];
    }
    return object;
}

module.exports = omit;

