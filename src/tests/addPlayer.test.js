import 'jest-localstorage-mock';
import addPlayer from '../utils/addPlayer';

test('check player input is null', () => {
  const p = addPlayer('');
  expect(p).toBe(null);
});

test('add Player Successfully', () => {
  const player = addPlayer('Player1');
  expect(player).toBe('Player1');
});