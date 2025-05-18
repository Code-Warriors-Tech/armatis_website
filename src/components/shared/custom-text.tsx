'use client';

import React, { useEffect, useState, ElementType } from 'react';
import { useTranslation } from '@/context/translator-provider';

interface CustomTextProps {
  text: string;
  className?: string;
  as?: ElementType;
}

const CustomText: React.FC<CustomTextProps> = ({
  text,
  className = "text-xl font-semibold",
  as: Tag = "h2",
}) => {
      const { translate, language } = useTranslation();
      const [translatedText, setTranslatedText] = useState(text);
    
      useEffect(() => {
        const doTranslate = async () => {
          const result = await translate(text);
          setTranslatedText(result);
        };
        doTranslate();
      }, [language, text]);
    
  return <Tag className={className}>{translatedText}</Tag>;
};

export default CustomText;
