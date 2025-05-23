'use client'
import React, {useState, useEffect} from 'react'
import { useTranslation } from '@/context/translator-provider';

interface TitleBadgeProps {
  text: string;
  className?: string;
}

const TitleBadge: React.FC<TitleBadgeProps> = ({text, className}) => {
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
    <p className={`border border-[#ED1969] text-[#ED1969] text-sm font-bold rounded-lg py-2 px-6 w-fit text-center mb-4 uppercase ${className}`}>
        {translatedText}
    </p>
  )
}

export default TitleBadge