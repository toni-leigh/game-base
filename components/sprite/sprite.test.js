const Sprite = require('./sprite');

const sprite = new Sprite(1);

test('cells is set', () => expect(sprite.cells).toEqual(1));