const compact = require("../../tasks/array/compact");

test("Creates an array with all falsey values removed", () => {
    expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
    expect(compact([false, "HTML", NaN, "CSS", "undefined"])).toEqual([
        "HTML",
        "CSS",
        "undefined",
    ]);
    expect(compact([false, true, "yes", "no", "no2"])).toEqual([
        true,
        "yes",
        "no",
        "no2",
    ]);
    expect(compact([0, false, "", undefined, NaN])).toEqual([]);
});
