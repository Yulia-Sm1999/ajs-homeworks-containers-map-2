export default class Settings {
  constructor(setting) {
    this.getSettings(setting);
  }

  getSettings(setting) {
    this.defaultSettings = new Map();
    this.defaultSettings.set('theme', 'dark');
    this.defaultSettings.set('music', 'trance');
    this.defaultSettings.set('difficulty', 'easy');

    if (setting === undefined) {
      return this.defaultSettings;
    }

    this.userSettings = new Map();
    this.userSettings.set(...setting);

    this.allSettings = new Map();

    this.defaultSettings.forEach((elem) => {
      if (this.userSettings.has(elem)) {
        this.allSettings.set(elem, this.userSettings.get(elem));
      } else {
        this.allSettings.set(elem, this.defaultSettings.get(elem));
      }
    });
    return this.allSettings;
  }
}
