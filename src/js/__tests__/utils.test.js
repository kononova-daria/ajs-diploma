import { calcTileType } from '../utils';

test('calcTileType возвращает top-left', () => {
  const index = 0;
  const boardSize = 8;

  const received = calcTileType(index, boardSize);
  const expected = 'top-left';

  expect(received).toBe(expected);
});

test('calcTileType возвращает top', () => {
  const index = 3;
  const boardSize = 8;

  const received = calcTileType(index, boardSize);
  const expected = 'top';

  expect(received).toBe(expected);
});

test('calcTileType возвращает top-right', () => {
  const index = 7;
  const boardSize = 8;

  const received = calcTileType(index, boardSize);
  const expected = 'top-right';

  expect(received).toBe(expected);
});

test('calcTileType возвращает left', () => {
  const index = 16;
  const boardSize = 8;

  const received = calcTileType(index, boardSize);
  const expected = 'left';

  expect(received).toBe(expected);
});

test('calcTileType возвращает right', () => {
  const index = 23;
  const boardSize = 8;

  const received = calcTileType(index, boardSize);
  const expected = 'right';

  expect(received).toBe(expected);
});

test('calcTileType возвращает bottom-left', () => {
  const index = 56;
  const boardSize = 8;

  const received = calcTileType(index, boardSize);
  const expected = 'bottom-left';

  expect(received).toBe(expected);
});

test('calcTileType возвращает bottom', () => {
  const index = 58;
  const boardSize = 8;

  const received = calcTileType(index, boardSize);
  const expected = 'bottom';

  expect(received).toBe(expected);
});

test('calcTileType возвращает bottom-right', () => {
  const index = 63;
  const boardSize = 8;

  const received = calcTileType(index, boardSize);
  const expected = 'bottom-right';

  expect(received).toBe(expected);
});

test('calcTileType возвращает center', () => {
  const index = 12;
  const boardSize = 8;

  const received = calcTileType(index, boardSize);
  const expected = 'center';

  expect(received).toBe(expected);
});
