const includes = require("../../tasks/array/includes");

test("Checks if value is in collection", () => {
    expect(includes([1, 2, 3], 1, 2)).toBe(false);
    expect(includes([1, 2, 3], 6)).toBe(false);
    expect(includes([1, 2, 3], 1)).toBe(true);
    expect(includes({ 'a': 1, 'b': 2 }, 1)).toBe(true);
    expect(includes({ 'a': 1, 'b': 2 }, 8)).toBe(false);
    expect(includes('abcd', 'bc')).toBe(true);
    expect(includes('abcd', 'bca')).toBe(false);
});
