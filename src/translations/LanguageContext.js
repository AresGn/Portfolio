import React, { createContext, useState, useContext, useEffect } from 'react';
import { en, fr, es } from './index';

// Create the language context
const LanguageContext = createContext();

// Language options
export const languages = {
  en: { name: 'English', translations: en, flag: '🇬🇧' },
  fr: { name: 'Français', translations: fr, flag: '🇫🇷' },
  es: { name: 'Español', translations: es, flag: '🇪🇸' }
};

// Provider component
export const LanguageProvider = ({ children }) => {
  // Get saved language from local storage or default to browser language or English
  const getBrowserLanguage = () => {
    const browserLang = navigator.language.split('-')[0];
    return ['en', 'fr', 'es'].includes(browserLang) ? browserLang : 'en';
  };

  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('language');
    return savedLang || getBrowserLanguage();
  });

  const [translations, setTranslations] = useState(languages[language].translations);

  // Update translations when language changes
  useEffect(() => {
    setTranslations(languages[language].translations);
    localStorage.setItem('language', language);
  }, [language]);

  // Function to change language
  const changeLanguage = (lang) => {
    if (languages[lang]) {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 