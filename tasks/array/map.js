function map(value, iteratee) {
    let newArr = [];
    let ind = 0;
    if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
            if (
                typeof value[i] === "object" &&
                !Array.isArray(value)
            ) {
                for (let key in value[i]) {
                    newArr[ind] = iteratee(value[i][key]);
                    ind++;
                }
            }
            newArr[ind] = iteratee(value[i]);
            ind++;
        }
    }
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
        for (let key in value) {
            newArr[ind] = iteratee(value[key]);
            ind++;
        }
    }
    return newArr;
}

module.exports = map;
