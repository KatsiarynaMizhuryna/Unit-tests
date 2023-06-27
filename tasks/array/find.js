function find(collection, predicate, fromIndex = 0) {
    if (typeof predicate === "function") {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
            }
        }
    }
    if (Array.isArray(predicate)) {
        for (let i = 0; i < collection.length; i++) {
            for (let key in collection[i]) {
                if (key === predicate[0] && collection[i][key] === predicate[1]) {
                    return collection[i];
                }
            }
        }
    }

    if (typeof predicate === "object" && !Array.isArray(predicate)) {
        for (let i = 0; i < collection.length; i++) {
            let compare = true;
            for (let key in predicate) {
                if (collection[i][key] !== predicate[key]) {
                    compare = false;
                    break;
                }
            }
            if (compare) {
                return collection[i];
            }
        }
    }
    if (typeof predicate === "string") {
        for (let i = 0; i < collection.length; i++) {
            if (collection[i][predicate]) {
                console.log(collection[i][predicate]);
                return collection[i];
            }
        }
    }
    return false;
}

module.exports = find;
