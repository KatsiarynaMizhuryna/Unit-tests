const merge = require("../../tasks/object/merge");

let object = {
    a: [{ b: 2 }, { d: 4 }],
};

let other = {
    a: [{ c: 3 }, { e: 5 }],
};

let obj = {
    amit: [{ susanta: 20 }, { durgam: 40 }],
};

let oth = {
    amit: [{ chinmoy: 30 }, { kripamoy: 50 }],
};
test("", () => {
    expect(merge(object, other)).toEqual({
        a: [
            { b: 2, d: 4 },
            { c: 3, e: 5 },
        ],
    });
    expect(merge(obj, oth)).toEqual({
        amit: [
            { susanta: 20, durgam: 40 },
            { chinmoy: 30, kripamoy: 50 },
        ],
    });
});
