import React from 'react';

interface CustomParagraphProps {
  text: string;
  className?: string;
}

const CustomParagraph: React.FC<CustomParagraphProps> = ({ text, className = '' }) => {
  return (
    <p className={`text-gray-700 text-sm sm:text-base ${className}`}>
      {text}
    </p>
  );
};

export default CustomParagraph;
