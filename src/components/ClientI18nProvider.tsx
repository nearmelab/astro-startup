import * as React from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '@/utils/i18n';
import { ThemeProvider } from '@/contexts/ThemeContext';

const ClientI18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n: i18nInstance } = useTranslation();

  React.useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      if (i18nInstance.language !== lng) {
        i18nInstance.changeLanguage(lng);
      }
      if (lng === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
      }
    };

    i18n.on('languageChanged', handleLanguageChange);
    handleLanguageChange(i18n.language);

    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18nInstance]);

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </I18nextProvider>
  );
};

export default ClientI18nProvider;
