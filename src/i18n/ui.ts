import en from './en.json';
import ar from './ar.json';

export const languages = {
  en: 'English',
  ar: 'العربية',
};

export const defaultLang = 'en';

export const ui = {
  en,
  ar,
} as const;
