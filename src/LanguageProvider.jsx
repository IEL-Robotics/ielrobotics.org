// LanguageProvider.js
import React, { useState } from 'react';
import LanguageContext from './Context/LanguageContext';
import en from './Languages/en.json'; // Import your language files
import tr from './Languages/tr.json';
import de from './Languages/de.json';

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  const getTranslation = (key) => {
    const translations = {
      en,
      tr,
      de
    };

    return translations[language][key] || key; // Return the translated value or the key itself
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
