function omitBy(object, predicate) {
    let newObj = {};
    for (let key in object) {
        if (!predicate(object[key], key)) {
            newObj[key] = object[key];
        }
    }
    return newObj;
}

module.exports = omitBy;
