function includes(collection, value, fromIndex) {
    if (Array.isArray(collection)) {
        for (
            let i = fromIndex === undefined ? (fromIndex = 0) : fromIndex;
            i < collection.length;
            i++
        ) {
            return collection[i] === value;
        }
    }
    if (
        typeof collection === "object" &&
        !Array.isArray(collection) &&
        collection !== null
    ) {
        for (let key in collection) {
            return collection[key] === value;
        }
    }
    if (typeof collection === "string") {
        return collection.indexOf(value) !== -1;
    }
    return false;
}

module.exports = includes;
