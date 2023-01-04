export default class Settings {
  constructor() {
    this.defaultSettings = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
  }

  setUserSettings(settings) {
    settings.forEach((setting) => {
      this.defaultSettings.set(setting[0], setting[1]);
    });
  }

  get settings() {
    return this.defaultSettings;
  }
}
