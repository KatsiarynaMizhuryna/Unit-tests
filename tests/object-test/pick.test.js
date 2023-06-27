const pick = require("../../tasks/object/pick");

let obj = {
    Name: "GeeksforGeeks",
    password: "gfg@1234",
    username: "your_geeks",
};
test("Creates an object composed of the picked object properties.", () => {
    expect(pick({ a: 1, b: "2", c: 3 }, ["a", "c"])).toEqual({ a: 1, c: 3 });
    expect(pick(obj, ["password", "username"])).toEqual({
        password: "gfg@1234",
        username: "your_geeks",
    });
    expect(pick({ x: 1, y: "2", z: 3 }, ["x", "y"])).toEqual({ x: 1, y: "2" });
});
