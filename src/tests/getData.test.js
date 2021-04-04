import 'regenerator-runtime/runtime';
import fetch from 'jest-fetch-mock';
import getData from '../utils/getData';

fetch.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

test('get the scored data', async () => {
  fetch.mockResponseOnce(JSON.stringify({
    result: [
      {
        user: 'Player1',
        score: 100,
      },
    ],
  }));
  const score = await getData();
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(score).toEqual([
    {
      user: 'Player1',
      score: 100,
    },
  ]);
});