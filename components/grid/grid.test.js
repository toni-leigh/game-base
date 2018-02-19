const Grid = require('./grid');

const grid = new Grid(1, 2);

test('width is set', () => expect(grid.w).toEqual(1));
test('height is set', () => expect(grid.h).toEqual(2));