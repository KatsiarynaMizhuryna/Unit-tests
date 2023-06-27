const includes = require("../../tasks/array/includes");

test("Checks if value is in collection", () => {
    expect(includes([1, 2, 3], 1, 2)).toEqual(false);
    expect(includes([1, 2, 3], 6)).toEqual(false);
    expect(includes([1, 2, 3], 1)).toEqual(true);
    expect(includes({ 'a': 1, 'b': 2 }, 1)).toEqual(true);
    expect(includes({ 'a': 1, 'b': 2 }, 8)).toEqual(false);
    expect(includes('abcd', 'bc')).toEqual(true);
    expect(includes('abcd', 'bca')).toEqual(false);
});
