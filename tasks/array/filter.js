function filter(collection, predicate, fromIndex = 0) {
    let newArr = [];
    let ind = 0;

    if (typeof predicate === "function") {
        for (let i = fromIndex; i < collection.length; i++) {
            if (predicate(collection[i])) {
                newArr[ind] = collection[i];
                ind++;
            }
        }
    }

    if (Array.isArray(predicate)) {
        for (let i = fromIndex; i < collection.length; i++) {
            for (let key in collection[i]) {
                if (key === predicate[0] && collection[i][key] === predicate[1]) {
                    newArr[ind] = collection[i];
                    ind++;
                }
            }
        }
    }

    if (typeof predicate === "object" && !Array.isArray(predicate)) {
        for (let i = fromIndex; i < collection.length; i++) {
            let compare = true;
            for (let key in predicate) {
                if (collection[i][key] !== predicate[key]) {
                    compare = false;
                    break;
                }
            }
            if (compare) {
                newArr[ind] = collection[i];
                ind++;
            }
        }
    }

    if (typeof predicate === "string") {
        for (let i = fromIndex; i < collection.length; i++) {
            if (collection[i][predicate]) {
                newArr[ind] = collection[i];
                ind++;
            }
        }
    }

    return newArr;
}

module.exports = filter;
