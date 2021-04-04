import 'jest-localstorage-mock';
import checkUser from '../utils/checkUser';
import addPlayer from '../utils/addPlayer';

test('check if user is not stored', () => {
  expect(checkUser()).toBe(false);
});

test('check player is exists', () => {
  addPlayer('Player1');
  expect(checkUser()).toBe(true);
});

test('check user is in database', () => {
  expect(checkUser()).toBe(true);
});
