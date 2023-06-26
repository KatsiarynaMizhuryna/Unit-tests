const take = require("../../tasks/array/take");

test("Creates a slice of array with n elements taken from the beginning.", () => {
    expect(take([1, 2, 3])).toEqual([1]);
    expect(take([1, 2, 3], 2)).toEqual([1, 2]);
    expect(take([1, 2, 3], 5)).toEqual([1, 2, 3]);
    expect(take([1, 2, 3], 0)).toEqual([]);
});
