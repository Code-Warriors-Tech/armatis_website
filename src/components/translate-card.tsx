'use client';

import { useTranslation } from '@/context/translator-provider';
import { useEffect, useState } from 'react';


const TranslateCard = () => {
  const { language, setLanguage, translate } = useTranslation();
  const [translated, setTranslated] = useState('');

  useEffect(() => {
    const translateText = async () => {
      const result = await translate('Hello World!');
      setTranslated(result);
    };
    translateText();
  }, [language]);

  return (
    <div className="text-center">
      <h1 className="text-2xl">Current Language: {language}</h1>
      <p className="mt-4 text-lg">Translated: {translated}</p>

      <div className="mt-6 space-x-2">
        <button onClick={() => setLanguage('fr')} className="px-4 py-2 bg-blue-500 text-white rounded">French</button>
        <button onClick={() => setLanguage('es')} className="px-4 py-2 bg-green-500 text-white rounded">Spanish</button>
        <button onClick={() => setLanguage('en')} className="px-4 py-2 bg-gray-500 text-white rounded">English</button>
      </div>
    </div>
  );
};

export default TranslateCard;
