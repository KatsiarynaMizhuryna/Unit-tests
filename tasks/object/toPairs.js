function toPairs(obj) {
    let arrayFromObj = [];
    let ind = 0;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arrayFromObj[ind] = [key, obj[key]];
            ind++;
        }
    }
    return arrayFromObj;
}

module.exports = toPairs;
