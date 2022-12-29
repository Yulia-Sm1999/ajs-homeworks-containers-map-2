import Settings from '../src/Settings';

test('should show default settings', () => {
  const result = new Settings();
  const expectedSettings = new Map();
  expectedSettings.set('theme', 'dark');
  expectedSettings.set('music', 'trance');
  expectedSettings.set('difficulty', 'easy');

  expect(result.defaultSettings).toEqual(expectedSettings);
});

test('should show default and user settings', () => {
  const result = new Settings('theme', 'light');
  const expectedSettings = new Map();
  expectedSettings.set('theme', 'light');
  expectedSettings.set('music', 'trance');
  expectedSettings.set('difficulty', 'easy');

  expect(result.defaultSettings).toEqual(expectedSettings);
});
