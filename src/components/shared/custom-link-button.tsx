import React from 'react';
import Link from 'next/link';

interface CustomLinkButtonProps {
  text: string;
  href?: string;
}

const CustomLinkButton: React.FC<CustomLinkButtonProps> = ({ text, href = '#' }) => {
  return (
    <Link
      href={href}
      className="inline-block px-6 py-3 bg-[#ED1969] hover:bg-[#c6155a] text-white font-medium rounded-lg transition"
    >
      {text}
    </Link>
  );
};

export default CustomLinkButton;
