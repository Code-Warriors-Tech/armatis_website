'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import axios from 'axios';

type TranslationContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  translate: (text: string, sourceLang?: string) => Promise<string>;
};

const TranslationContext = createContext<TranslationContextType | null>(null);

export const TranslationProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en');

  const translate = async (text: string, sourceLang = 'en') => {
    if (language === sourceLang) return text;

    try {
      const options = {
        method: 'POST',
        url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
          'x-rapidapi-key': '9a651b55cdmsh271e3be03325872p15e8d3jsnc88dc83c8ff5',
          'x-rapidapi-host': 'deep-translate1.p.rapidapi.com',
          'Content-Type': 'application/json',
        },
        data: {
          q: text,
          source: sourceLang,
          target: language,
        },
      };

      const response = await axios.request(options);
      return response.data.data.translations.translatedText;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) throw new Error('useTranslation must be used within a TranslationProvider');
  return context;
};
