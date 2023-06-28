const chunk = require("../../tasks/array/chunk");

test("Creates an array of elements split into groups the length of size", () => {
    expect(chunk(["a", "b", "c", "d"], 2)).toEqual([
        ["a", "b"],
        ["c", "d"],
    ]);
    expect(chunk(["a", "b", "c", "d"], 3)).toEqual([["a", "b", "c"], ["d"]]);
    expect(chunk([], 3)).toEqual([]);
    expect(chunk(["a", "b", "c", "d"], 1)).toEqual([["a"], ["b"], ["c"], ["d"]]);
});
