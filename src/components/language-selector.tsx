'use client';

import { useTranslation } from '@/context/translator-provider';

const LanguageSelector = () => {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="flex justify-end p-2">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="border border-gray-300 text-black rounded px-2 py-1 text-sm focus:outline-none"
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="es">Español</option>
        <option value="de">Deutsch</option>
        <option value="zh">中文</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
