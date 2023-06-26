function zip(...arr) {
    let arrFromElements = [...arr]
    let groupedElements = []
    let resultArr = [];
    let count = 0;

    for (let n = 0; n < arrFromElements[n].length; n++) {
        for (let i = 0; i < arrFromElements.length; i++) {
            groupedElements[count] = arrFromElements[i][n];
            count++;
        }
        resultArr[n] = groupedElements;
        groupedElements = [];
        count = 0;
    }
    return resultArr;
}

module.exports = zip;
