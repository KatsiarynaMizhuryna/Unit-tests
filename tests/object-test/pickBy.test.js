const pickBy = require("../../tasks/object/pickBy");

test("Creates an object composed of the object properties predicate returns truthy for.", () => {
    expect(
        pickBy({ a: 1, b: "2", c: 3 }, (el) => typeof el === "number")
    ).toEqual({ a: 1, c: 3 });
    expect(
        pickBy({ a: 1, b: "2", c: 3 }, (el) => typeof el === "string")
    ).toEqual({ b: "2" });
    expect(
        pickBy({ a: 1, b: true, c: 3 }, (el) => typeof el === "boolean")
    ).toEqual({ b: true });
});
