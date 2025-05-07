import React from 'react';
import CustomSubtitle from './custom-subtitle';
import TitleBadge from './title-badge';
import CustomParagraph from './custom-paragraph';

interface CustomPageBannerProps {
  text: string;
  badge: string;
}

const CustomPageBanner: React.FC<CustomPageBannerProps> = ({ text, badge }) => {
  return (
    <div
      className="w-full h-[300px] flex flex-col justify-center items-center text-white text-center relative bg-cover bg-center mt-20"
      style={{
        backgroundImage: "url('/images/page-title.jpg')",
      }}
    >
      <div className="bg-black/40 absolute inset-0" /> {/* Dark overlay */}
      <div className="relative z-10">
        <CustomSubtitle text={text} className="text-white" />
        <CustomParagraph text={badge} className="text-white"/>
      </div>
    </div>
  );
};

export default CustomPageBanner;
