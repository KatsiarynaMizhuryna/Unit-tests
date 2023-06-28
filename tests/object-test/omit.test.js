const omit = require("../../tasks/object/omit");

let obj = { a: 1, b: "2", c: 3 };
let obj1 = {
    Name: "GeeksforGeeks",
    password: "gfg@1234",
    username: "your_geeks",
};
let obj2 = { x: 1, y: "2", z: 3 };
test("", () => {
    expect(omit(obj, ["a", "c"])).toEqual({ b: "2" });
    expect(omit(obj1, ["password", "username"])).toEqual({
        Name: "GeeksforGeeks",
    });
    expect(omit(obj2, ["x", "y"])).toEqual({ z: 3 });
});
