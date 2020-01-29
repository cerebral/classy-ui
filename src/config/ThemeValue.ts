import { IConfigDefaults } from '../types';

export class ThemeValue {
  category: keyof IConfigDefaults;
  label: string;
  themes: string[];
  value: string;
  constructor(category: keyof IConfigDefaults, label: string, value: string, themes: string[]) {
    this.category = category;
    this.label = label;
    this.value = value;
    this.themes = themes;
  }
  copy(value: string) {
    return new ThemeValue(this.category, this.label, value, this.themes);
  }
}
