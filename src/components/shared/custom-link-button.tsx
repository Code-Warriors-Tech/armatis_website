'use client'
import React, {useState, useEffect} from 'react'
import { useTranslation } from '@/context/translator-provider';
import Link from 'next/link';

interface CustomLinkButtonProps {
  text: string;
  href?: string;
}

const CustomLinkButton: React.FC<CustomLinkButtonProps> = ({ text, href = '#' }) => {
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
    <Link
      href={href}
      className="inline-block px-6 py-3 bg-[#ED1969] hover:bg-[#c6155a] text-white font-medium rounded-lg transition"
    >
      {translatedText}
    </Link>
  );
};

export default CustomLinkButton;
