import Settings from '../src/Settings';

test('should show default settings', () => {
  const result = new Settings();
  const expectedSettings = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);

  expect(result.settings).toEqual(expectedSettings);
});

test('should show default and user setting', () => {
  const result = new Settings();
  result.setUserSettings([['theme', 'light']]);
  const expectedSettings = new Map([['theme', 'light'], ['music', 'trance'], ['difficulty', 'easy']]);

  expect(result.settings).toEqual(expectedSettings);
});

test('should show default and user settings', () => {
  const result = new Settings();
  result.setUserSettings([['music', 'pop'], ['difficulty', 'hard']]);
  const expectedSettings = new Map([['theme', 'dark'], ['music', 'pop'], ['difficulty', 'hard']]);

  expect(result.settings).toEqual(expectedSettings);
});
