'use client'
import React, {useState, useEffect} from 'react'
import { useTranslation } from '@/context/translator-provider';

interface CustomTinyTitleProps {
  text: string;
  className?: string;
}


const CustomTinyTitle: React.FC<CustomTinyTitleProps> = ({text, className}) => {
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
    <h3 className={`text-black font-semibold ${className}`}>{translatedText}</h3>
  )
}

export default CustomTinyTitle