function merge(object, sources) {
    let newObj = {};

    for (let key in object ) {
        let a = Object.assign(...object[key]);
        let b = Object.assign(...sources[key]);
        object[key] = [a, b];
        newObj[key] = object[key];
    }
    return newObj;
}

module.exports = merge;
