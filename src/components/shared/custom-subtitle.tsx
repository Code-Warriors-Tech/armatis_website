'use client'
import React, {useState, useEffect} from 'react'
import { useTranslation } from '@/context/translator-provider';

interface CustomSubtitleProps {
  text: string;
  className?: string;
}

const CustomSubtitle: React.FC<CustomSubtitleProps> = ({text, className}) => {
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
    <h1 className={`text-[32px] lg:text-[56px] text-black font-bold leading-tight mb-6 ${className}`}>
      {translatedText}
    </h1>
  )
}

export default CustomSubtitle