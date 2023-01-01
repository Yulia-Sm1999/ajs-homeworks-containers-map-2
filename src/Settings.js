export default class Settings {
  constructor(settings) {
    this.defaultSettings = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
    this.newSettings = settings;
  }

  setUserSettings() {
    const userSettings = new Map();
    this.newSettings.forEach((array) => userSettings.set(array[0], array[1]));
    return userSettings;
  }

  get settings() {
    this.commonSettings = new Map();

    if (this.newSettings === undefined) {
      return this.defaultSettings;
    }
    const userSettings = this.setUserSettings();

    /* eslint-disable-next-line */
    for (const [key, value] of this.defaultSettings) {
      if (userSettings.has(key)) {
        this.commonSettings.set(key, userSettings.get(key));
      }
      if (!userSettings.has(key)) {
        this.commonSettings.set(key, value);
      }
    }

    userSettings.forEach((value, key) => {
      if (!this.defaultSettings.has(key)) {
        this.commonSettings.set(key, value);
      }
    });
    return this.commonSettings;
  }
}
