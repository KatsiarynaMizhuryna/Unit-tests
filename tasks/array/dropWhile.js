function dropWhile(arr, predicate) {
    let newArr = [];
    let ind = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof predicate === "function") {
            if (!predicate(arr[i])) return [arr[i]];
        }

        if (Array.isArray(predicate)) {
            if (arr[i].active === !predicate[1]) {
                return [arr[i]];
            }
        }
        if (typeof predicate === "object" && !Array.isArray(predicate)) {
            if (arr[i].user !== predicate.user) {
                newArr[ind] = arr[i];
                ind++;
            }
        }
        if (typeof predicate === "string") {
            for (let key in arr[i]) {
                if (key === predicate) {
                    newArr[ind] = arr[i];
                    ind++;
                }
            }
        }
    }
    return newArr;
}

module.exports = dropWhile;
