
import React, { useState } from 'react';
import LanguageContext from './Context/LanguageContext';
import en from './Languages/en.json';
import tr from './Languages/tr.json';
import de from './Languages/de.json';

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const getTranslation = (key) => {
    const translations = {
      en,
      tr,
      de
    };

    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        handleLanguageChange,
        getTranslation,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
