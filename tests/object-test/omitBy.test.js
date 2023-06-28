const omitBy = require("../../tasks/object/omitBy");
test("This method creates an object composed of the own and inherited enumerable string", () => {
    expect(omitBy({ a: 1, b: "2" }, (el) => true)).toEqual({});
    expect(
        omitBy({ a: 1, b: "2", c: 3 }, (el) => typeof el === "string")
    ).toEqual({ a: 1, c: 3 });
    expect(omitBy({ a: 1, b: "2" }, (el) => typeof el === "number")).toEqual({
        b: "2",
    });
});
