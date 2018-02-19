const Cell = require('./cell');

const cell = new Cell(1, 2);

test('x co-ordinate is set', () => expect(cell.x).toEqual(1));
test('y co-ordinate is set', () => expect(cell.y).toEqual(2));