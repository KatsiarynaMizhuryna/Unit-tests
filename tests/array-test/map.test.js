const map = require("../../tasks/array/map");

let users = [{ user: "barney" }, { user: "fred" }];

test("Creates an array of values by running each element in collection thru iteratee.", () => {
    expect(map(users, (el) => el.user)).toEqual(["barney", "fred"]);
    expect(map([4, 8], (el) => el * el)).toEqual([16, 64]);
    expect(map({ a: 4, b: 8 }, (el) => el * el)).toEqual([16, 64]);
});
