const zip = require('../../tasks/array/zip');

test('Creates an array of grouped elements', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([ [ 'a', 1, true ], [ 'b', 2, false ] ]);
    expect(zip(['fred', 'barney'], [30, 40], [true, false])).toEqual([['fred', 30, true], ['barney', 40, false]]);
    expect(zip(['a', 'b', 'c'],[1, 2, 3],[true, false, true])).toEqual([ [ 'a', 1, true ], [ 'b', 2, false ], [ 'c', 3, true ] ]);
});
