import 'jest-localstorage-mock';
import addPlayer from '../utils/addPlayer';

test('add Player Successfully', () => {
  const player = addPlayer('Player1');
  expect(player).toBe('Player1');
})