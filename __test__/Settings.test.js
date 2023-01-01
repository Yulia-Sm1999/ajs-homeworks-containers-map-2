import Settings from '../src/Settings';

test('should show default settings', () => {
  const result = new Settings();
  const expectedSettings = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);

  expect(result.settings).toEqual(expectedSettings);
});

test('should show default and user settings', () => {
  const result = new Settings([['theme', 'light'], ['background', 'sky']]);
  const expectedSettings = new Map([['theme', 'light'], ['music', 'trance'], ['difficulty', 'easy'], ['background', 'sky']]);

  expect(result.settings).toEqual(expectedSettings);
});
