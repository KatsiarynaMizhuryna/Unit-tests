const toPairs = require('../../tasks/object/toPairs');
function Foo() {
    this.a = 1;
    this.b = 2;
}
Foo.prototype.c = 3;

const GfG = {
    'x': 1,
    'y': 2
}

function Fb() {
    this.id = 2045;
    this.username = 'fb_myself';
    this.password = 'fb1234';
}

Fb.prototype.email = 'myself@gmail.com';
test('Returns the key-value pairs', () => {
    expect(toPairs(new Foo)).toEqual([['a', 1], ['b', 2]]);
    expect(toPairs(GfG)).toEqual([['x', 1], ['y', 2]]);
    expect(toPairs(new Fb)).toEqual([["id", 2045], ["username", "fb_myself"], ["password", "fb1234"]]);


});
