'use client';

import React, { useEffect, useState } from 'react';
import { useTranslation } from '@/context/translator-provider';

interface CustomParagraphProps {
  text: string;
  className?: string;
}

const CustomParagraph: React.FC<CustomParagraphProps> = ({ text, className = '' }) => {
  const { translate, language } = useTranslation();
  const [translatedText, setTranslatedText] = useState(text);

  useEffect(() => {
    const doTranslate = async () => {
      const result = await translate(text);
      setTranslatedText(result);
    };
    doTranslate();
  }, [language, text]);

  return (
    <p className={`text-gray-700 text-sm sm:text-base ${className}`}>
      {translatedText}
    </p>
  );
};

export default CustomParagraph;
