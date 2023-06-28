const drop = require("../../tasks/array/drop");

test("Creates a slice of array with n elements dropped from the beginning", () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
    expect(drop([1, 2, 3])).toEqual([2, 3]);
    expect(drop(["a", "b", "c", "d"], 2)).toEqual(["c", "d"]);
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
    expect(drop([1, 2, "a", "b", "c", "d"], 3)).toEqual(["b", "c", "d"]);
    expect(drop([1, 2, "a", "b", "c", "d"], 10)).toEqual([]);
});
