import Model from '../Model';

test('check if music is playing', () => {
  const model = new Model();
  expect(model.musicOn).toBe(true);
});

test('check sound is playing', () => {
  const model = new Model();
  expect(model.soundOn).toBe(true);
});
