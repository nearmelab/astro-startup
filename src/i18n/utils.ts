import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    const keys = key.split('.');
    let translation = ui[lang];
    let fallback = ui[defaultLang];
    
    for (const k of keys) {
      if (translation && typeof translation === 'object' && k in translation) {
        translation = translation[k];
      } else {
        translation = undefined;
        break;
      }
    }

    if (translation !== undefined) {
      return translation;
    }

    for (const k of keys) {
        if (fallback && typeof fallback === 'object' && k in fallback) {
            fallback = fallback[k];
        } else {
            return key;
        }
    }
    return fallback;
  }
}
